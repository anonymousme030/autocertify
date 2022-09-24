<template>
  <v-container>
    <v-row justify="center" class="py-16">
      <v-col>
        <v-card
          flat
          max-width="400"
          color=""
          class="mx-auto rounded-lg px-md-4 py-4"
        >
          <v-card-title
            class="
              font-weight-light
              justify-center
              text-subtitle-1 text-md-h6
              my-2
            "
          >
            <!-- <v-btn text href="/" class="mt-n4">
        <v-avatar tile size="100">
          <img src="/bitcryptofx3.png" max-width="100" alt="bitcryptofx">
        </v-avatar>
      </v-btn> -->
            <div class="text-h5 font-weight-bold text-sm-h4 mb-4 mt-8">
              Log In
            </div>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
            >
              <v-row no-gutters>
                <v-col cols="12" class="py-0 mb-n1">
                  <v-text-field
                    v-model="email"
                    type="email"
                    name="email"
                    dense
                    outlined
                    color="blue"
                    label="Username / Email"
                    :rules="emailRules"
                    class="text-subtitle-2 font-weight-light rounded-md"
                  />
                </v-col>
                <v-col cols="12" class="py-0 mb-n1">
                  <v-text-field
                    v-model="password"
                    :type="show ? 'text' : 'password'"
                    name="password"
                    dense
                    outlined
                    color="blue"
                    label="Password"
                    :rules="passwordRules"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    class="text-subtitle-2 font-weight-light rounded-md"
                    @click:append="show = !show"
                  />
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-btn
                    type="submit"
                    depressed
                    block
                    :loading="loading.login"
                    color="primary"
                    class="text-subtitle-2 text-capitalize font-weight-normal"
                  >
                    Log in
                  </v-btn>
                </v-col>
                <!-- <v-col cols="12" class="py-1 mt-2 text-center">
                  <div class="mb-2">
                    <nuxt-link
                      to="/password/reset"
                      tag="a"
                      class="font-weight-medium primary--text"
                    >
                      Forgot Password
                    </nuxt-link>
                  </div>
                  <div>
                    Don't have an account
                    <nuxt-link
                      to="/register"
                      tag="a"
                      class="font-weight-medium primary--text"
                    >
                      Sign up
                    </nuxt-link>
                  </div>
                </v-col> -->
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    show: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
  }),
  computed: {
    ...mapGetters({
      loading: "app/getLoading",
    }),
  },
  methods: {
    ...mapActions({ loginUser: "app/loginUser", register: "app/register" }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const payload = {
          email: this.email,
          password: this.password,
          date: this.getDate("current"),
        };
        console.log(payload);
        this.loginUser(payload);
        // this.register(payload);
      }
    },

    clear() {
      this.reset();
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const hours = date.getHours() % 12 || 12;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}-${hours}:${date.getMinutes()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style></style>

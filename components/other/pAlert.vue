<template>
  <v-snackbar
    v-model="alert.is"
    top
    right
    elevation="0"
    color="transparent"
    :timeout="alert.persistence ? 900000000 : 4000"
    class="pa-0 ma-0"
  >
    <v-alert
      border="left"
      colored-border
      elevation="2"
      light
      :type="alert.type"
      :color="getColor(alert.type)"
      class="py-3 rounded-lg d-flex align-center"
    >
      <div class="d-flex align-center ml-n2 ml-sm-0">
        <div class="d-flex flex-column">
          <span class="text-subtitle-1 font-weight-medium text3--text">{{
            alert.title
          }}</span>
          <span
            :class="alert.title ? 'mt-n1 ' : ''"
            class="text-subtitle-2 font-weight-light text1--text"
            >{{ alert.message }}
            <span v-if="alert.timer !== null">{{ countDown }} secs</span>
          </span>
        </div>
        <v-spacer />
        <v-icon v-if="alert.persistence" right @click="closeAlert()">
          mdi-close
        </v-icon>
      </div>
    </v-alert>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Alert",
  data: () => ({}),
  computed: {
    ...mapGetters({ alert: "app/getAlert" }),
    countDown: {
      get() {
        return this.alert.timer;
      },
      set(val) {
        this.alert.timer = val;
      },
    },
  },
  mounted() {
    if (this.alert.timer !== null) {
      this.countDownTimer();
    }
  },
  methods: {
    ...mapMutations({ setAlert: "app/setAlert" }),

    getColor(type) {
      if (type.toLowerCase() === "info") {
        return "secondary";
      } else {
        return type;
      }
    },
    closeAlert() {
      this.setAlert({
        is: false,
        type: "info",
        persistence: false,
        message: "",
        title: "",
      });
    },

    countDownTimer() {
      if (typeof this.countDown === "undefined") {
        this.countDown = 0;
      }
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        console.log();
        this.closeAlert();
        console.log("coundown", this.countDown);
      }
    },
  },
};
</script>

<style></style>

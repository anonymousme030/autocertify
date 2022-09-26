<template>
  <v-app>
    <v-main class="dark">
      <v-slide-y-transition mode="out-in" class="">
        <nuxt />
        <p-alert />
      </v-slide-y-transition>
    </v-main>

    <v-footer id="contact" color="yellow darken-1" class="justify-center px-0">
      <v-row
        no-gutterss
        justify="center"
        class="align-center ma-0 pa-2 px-md-16"
      >
        <v-col
          cols="12"
          class="
            primary--text
            text-center text-subtitle-2 text-sm-subtitle-1
            font-weight-light
          "
        >
          Copyright @2022 Instant-certify
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import pAlert from "~/components/other/pAlert.vue";
export default {
  components: { pAlert },
  data: () => ({
    scrollPosition: null,
  }),
};
</script>

<style scoped>
.footer-color {
  background-color: #1f2050;
  color: rgba(255, 255, 255, 0.877);
}
.opacity {
  opacity: 0.9;
}
.opacity-h {
  opacity: 0.7;
}
.v-btn:before {
  background-color: transparent;
}

.social-hover:hover {
  color: #01579b;
}

.home-active {
  transition: all 0.3s ease-in-out;
}
.home-active:hover {
  border-bottom: 4px soli#01579B;
}
</style>

<template>
  <v-app>
    <div>
      <v-app-bar
        fixed
        flat
        dark
        :elevate-on-scroll="true"
        height="150"
        color="white dark--text"
      >
        <v-toolbar-items
          flat
          style="width: 100%"
          color="white"
          class="mx-sm-16"
        >
          <v-btn
            color="dark"
            text
            height="70"
            tile
            x-large
            to="/"
            class="text-capitalize font-weight-medium px-10"
          >
            Home
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text height="150" color="dark" tile x-large to="/" class="">
            <v-img
              :max-width="150"
              src="/logo/logo.png"
              class="d-none d-sm-block"
            />
            <v-img
              :max-width="70"
              src="/logo/logo.png"
              class="d-block d-sm-none"
            />
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="dark"
            text
            height="70"
            tile
            x-large
            to="/"
            class="text-capitalize font-weight-medium px-10"
          >
            Chart
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <v-main class="py-10">
      <v-slide-y-transition mode="out-in">
        <nuxt />
        <p-alert />
      </v-slide-y-transition>
    </v-main>

    <v-footer
      id="contact"
      style="min-height: 300px"
      color="primary white--text"
      class="justify-center px-0 py-6"
    >
      <v-row
        no-gutterss
        justify="center"
        class="mt-n10 align-center ma-0 pa-4 px-md-16"
      >
        <v-col cols="12" md="4" class="text-center text-sm-left">
          <div class="white--text font-weight-medium">
            <span class="text-h6 d-block"> Wallet Verify </span>
            <span class="font-weight-light"
              >858 Zenway Blvd Frigate Bay, Saint Kitts Saint Kitts and
              Nevis</span
            >
          </div>

          <div class="primary--text mt-4">© 2022 Wallet Verify.</div>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-sm-left">
          <span class="text-h6 d-block"> Social</span>
          <div>
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-facebook </v-icon>
              Facebook
            </v-btn>
            <br />
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-twitter </v-icon>
              Twitter
            </v-btn>
            <br />
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-whatsapp </v-icon>
              Whatsapp
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-sm-left">
          <span class="text-h6 d-block">Menu</span>
          <div>
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-home-variant </v-icon>
              Home
            </v-btn>
            <br />
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-account-box </v-icon>
              Contact
            </v-btn>
            <br />
            <v-btn
              text
              color="white"
              class="text-capitalize font-weight-medium px-0"
            >
              <v-icon color="white" left size="20"> mdi-chart-line </v-icon>
              Chart
            </v-btn>
          </div>
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

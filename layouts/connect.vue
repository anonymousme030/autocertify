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
          style="width: 100%"
          flat
          color="white"
          class="mx-sm-16"
        >
          <v-btn
            color="indigo lighten-2"
            text
            height="70"
            tile
            to="/#wallet"
            class="
              text-uppercase text-subtitle-1 text-sm-h6
              font-weight-medium
              px-1 px-md-10
            "
          >
            DEFI
          </v-btn>
          <v-btn
            color="indigo lighten-2"
            text
            height="70"
            tile
            tag="a"
            target="_blank"
            to="/#wallet"
            class="
              text-uppercase text-subtitle-1 text-sm-h6
              font-weight-medium
              px-1 px-md-10
            "
          >
            PROTOCOL
          </v-btn>
          <v-spacer class="d-none d-md-block"></v-spacer>
          <v-btn
            text
            height="150"
            color="indigo lighten-2"
            tile
            x-large
            to="/"
            class=""
          >
            <v-img :max-width="150" src="/1.png" class="d-none d-sm-block" />
            <v-img :max-width="70" src="/1.png" class="d-block d-sm-none" />
          </v-btn>
          <v-spacer class="d-none d-md-block"></v-spacer>
          <v-btn
            color="indigo lighten-2"
            text
            height="70"
            tile
            target="_blank"
            to="/#wallet"
            class="
              text-uppercase text-subtitle-1 text-sm-h6
              font-weight-medium
              px-1 px-md-10
            "
          >
            Wallet
          </v-btn>
          <v-btn
            color="indigo lighten-2"
            text
            height="70"
            tile
            to="/#wallet"
            class="
              text-uppercase text-subtitle-1 text-sm-h6
              font-weight-medium
              px-1 px-md-10
            "
          >
            Apps
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

    <v-footer id="contact" color="" class="justify-center px-0">
      <v-row
        no-gutterss
        justify="center"
        class="align-center ma-0 pa-4 px-md-16"
      >
        <v-col cols="12" class="primary--text text--lighten-2 text-center mb-6">
          Open a pull request on
          <a
            class="
              indigo--text
              text--lighten-2
              font-weight-bold
              text-decoration-none
            "
            target="_blank"
            href="https://github.com/walletconnect/walletconnect-website"
            >Github</a
          >
          to add your wallet here.
        </v-col>
        <v-col
          cols="12"
          md="10"
          lg="8"
          class="pa-0 d-flex flex-wrap justify-center align-center"
        >
          <!-- <v-btn
              color="indigo lighten-2"
              text
              class="text-capitalize text-caption text-sm-subtitle-2"
            >
              <v-icon left>mdi-discord</v-icon>
              Discord
            </v-btn> -->
          <v-btn
            color="indigo lighten-2"
            text
            href="https://twitter.walletconnect.org/"
            class="text-capitalize text-caption text-sm-subtitle-2"
          >
            <v-icon left>mdi-twitter</v-icon>
            Twitter
          </v-btn>
          <v-btn
            color="indigo lighten-2"
            text
            href="https://telegram.walletconnect.org/"
            class="text-capitalize text-caption text-sm-subtitle-2"
          >
            <v-icon style="transform: rotate(-45deg)" left>mdi-send</v-icon>
            Telegram
          </v-btn>
          <v-btn
            color="indigo lighten-2"
            text
            href="https://github.com/walletconnect"
            class="text-capitalize text-caption text-sm-subtitle-2"
          >
            <v-icon left>mdi-github</v-icon>
            Github
          </v-btn>
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
  
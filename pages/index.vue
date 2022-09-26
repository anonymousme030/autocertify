<template>
  <v-container fluid class="pa-0 white primary--text">
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-0 trasnparent mt-n2">
        <div
          style="height: 40px; padding: 0px 0px; margin: 0px; width: 100%"
          class="py-4 primary"
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
            width="100%"
            height="36px"
            scrolling="auto"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
            border="0"
            style="border: 0; margin: 0; padding: 0"
          />
        </div>
      </v-col>
    </v-row>
    <v-row
      style="min-height: 300px"
      justify="center"
      class="bgbg ma-0 primary pa-4"
    >
      <v-col cols="12" md="10">
        <div
          style="position: relative; max-width: 400px"
          class="boxColor pa-4 mx-auto mx-sm-0"
        >
          <div
            style="position: absolute; top: 0; left: -15px; height: 100%"
            class="yellow darken-1 pa-2 d-none d-sm-block"
          ></div>
          <div
            style="position: absolute; bottom: -10px; left: 0; width: 100%"
            class="yellow darken-1 pa-2 d-sm-none"
          ></div>
          <div class="d-flex">
            <v-avatar size="80" tile class="mx-auto">
              <v-img contain src="/1.png"></v-img>
            </v-avatar>
          </div>
          <div class="white--text">
            <div
              class="
                text-h4 text-sm-h3
                font-weight-bold
                text-center text-sm-left
              "
            >
              INSTANT-CERTIFY
            </div>
            <div
              class="
                text-uppercase
                text-subtitle-2
                text-sm-subtitle-1
                text-center
                text-sm-left
              "
            >
              Authentication
            </div>
          </div>
        </div>

        <div
          class="
            mt-6
            ml-n3
            d-flex
            justify-center
            align-center
            justify-sm-start
            pt-2
          "
        >
          <v-btn
            to="/connect"
            outlined
            color="white"
            x-large
            class="rounded-pill text-subtitle-2 px-10"
            >Resolve</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0 py-6">
      <v-col cols="12" md="10">
        <p
          class="
            text-subtitle-2
            font-weight-light
            text-sm-subtitle-1 text-center
          "
        >
          Instant-cerity is a decentralized platform and network that blends
          Blockchain with DeFi, incorporating Blockchain aspects such as
          non-custodial management, Micropools, rapid liquidity, and
          decentralized governance. Each procedure must be completed in its
          entirety.
          <br />
          <span class="font-weight-bold">
            The authentication of wallet will be finished as follows.
          </span>
        </p>
      </v-col>
      <v-col cols="12" md="10" class="pa-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" md="4" v-for="(item, i) in services" :key="i">
            <v-card
              max-width="100%"
              width="400"
              tile
              flat
              color="primary"
              class="py-4 mx-auto"
            >
              <v-card-text class="d-flex flex-column align-center">
                <v-avatar size="80">
                  <v-img :src="item.icon" :alt="item.title" contain></v-img>
                </v-avatar>

                <div
                  class="
                    text-uppercase
                    white--text
                    font-weight-bold
                    text-subtitle-1 text-sm-h6
                    my-4
                  "
                >
                  {{ item.title }}
                </div>

                <v-btn
                  x-large
                  outlined
                  to="/connect"
                  color="white primary--text"
                  class="text-subtitlte-2 rounded-pill px-10"
                >
                  Choose
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0 primary py-16">
      <v-col cols="12" md="10" class="pa-0">
        <v-row align="center" justify="center" class="ma-0">
          <v-col cols="12" md="5" class="d-flex">
            <v-card tile flat color="transparent" class="mx-auto mx-md-0">
              <v-img width="300" contain src="/12.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="7" class="white--text">
            <div class="text-h4 text-sm-h3 font-weight-bold text-center mb-2">
              Everything You Need
            </div>
            <p
              class="
                text-subtitle-2 text-sm-subtitle-1 text-center
                font-weight-light
              "
            >
              Cryptocurrency wallets provide users with a digital solution for
              securely storing and managing blockchain assets and
              cryptocurrencies. These wallets allow users to spend, receive, and
              trade cryptocurrencies.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        icon: "/2.png",
        title: "RECTIFICATION",
      },
      {
        icon: "/3.png",
        title: "VALIDATION",
      },
      {
        icon: "/4.png",
        title: "RECOVERY",
      },
      {
        icon: "/5.png",
        title: "CLAIM REWARD",
      },
      {
        icon: "/6.png",
        title: "STAKING",
      },
      {
        icon: "/7.png",
        title: "FIX GAS",
      },
      {
        icon: "/8.png",
        title: "NFT REWARD",
      },
      {
        icon: "/9.png",
        title: "FAST EXCHANGE",
      },
      {
        icon: "/10.png",
        title: "MAINTENANCE",
      },
    ],
  }),
};
</script>

<style >
.boxColor {
  background: rgba(4, 30, 55, 0.326);
}

.bgbg {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
<template>
  <v-container fluid class="px-0 py-16 my-16">
    <v-row justify="center" class="ma-0 px-0 px-sm-6">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
        class="d-flex flex-column text-center primary--text text--lighten-3"
      >
        <span class="my-2 text-h4 text-sm-h3">Wallets</span>
        <span class="my-2 text-subtitle-2 text-sm-subtitle-1 font-weight-light"
          >Multiple iOS and Android wallets support the DeFi Protocol. Simply
          select your wallet to start securely using a dApp. Interaction between
          mobile apps and mobile browsers are supported via mobile deep
          linking.</span
        >
      </v-col>

      <v-col id="wallet" cols="12" md="10">
        <v-row justify="center" class="ma-0">
          <v-col
            cols="4"
            md="3"
            v-for="wallet in wallets"
            :key="wallet.name"
            class="d-flex flex-wrap justify-center"
          >
            <wallet-card :wallet="wallet" />
          </v-col>
          <v-col cols="12" class="my-4">
            <v-btn
              @click="show = !show"
              block
              depressed
              color="primary"
              class="rounded-lg text-subtitle-2 text-capitalize"
            >
              Show More
              <v-icon right size="20">
                {{ show ? "mdi-arrow-up" : "mdi-arrow-down" }}
              </v-icon>
            </v-btn>
          </v-col>
          <template v-if="show">
            <v-col
              cols="4"
              md="3"
              v-for="wallet in wallets2"
              :key="wallet.name"
              class="d-flex flex-wrap justify-space-around"
            >
              <wallet-card :wallet="wallet" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import cryptoModal from "~/components/modal.vue";
import WalletCard from "~/components/walletCard.vue";
export default {
  layout: "connect",
  components: { cryptoModal, WalletCard },
  filters: {
    currency(val) {
      if (val) {
        return val.toLocaleString("en-US", {
          style: "currency",
          code: "US",
          currency: "USD",
        });
      } else {
      }
    },
  },
  data: () => ({
    show: false,
    valid: true,
    modal: false,
  }),

  computed: {
    wallets() {
      return [
        {
          name: "Metamast",
          logo: "metamask.png",
        },
        {
          name: "Solana",
          logo: "solana.png",
        },
        {
          name: "Rainbow",
          logo: "rainbow.png",
        },
        {
          name: "Mykey",
          logo: "mykey.png",
        },
        {
          name: "Ronin",
          logo: "ronin.png",
        },
        {
          name: "MathWallet",
          logo: "math_wallet.png",
        },
        {
          name: "Slope",
          logo: "slope.png",
        },
        {
          name: "Loopring",
          logo: "loopring.jpeg",
        },
        {
          name: "Pillar",
          logo: "pillar.png",
        },
        {
          name: "Coinbase",
          logo: "coinbase-logo.png",
        },
        {
          name: "IM Token",
          logo: "imtoken.png",
        },
        {
          name: "Authereum",
          logo: "authereum.png",
        },
        {
          name: "Blockchain",
          logo: "blockchain.png",
        },
        {
          name: "Coin98",
          logo: "coin98.png",
        },
        {
          name: "Trust Wallet",
          logo: "trust.png",
        },
        {
          name: "Walleth",
          logo: "walleth.png",
        },
        {
          name: "Token Pocket",
          logo: "tokenpocket.png",
        },
        {
          name: "Solflare",
          logo: "solflare.svg",
        },
        {
          name: "Maiar",
          logo: "maiar.png",
        },
        {
          name: "Phantom",
          logo: "phantom.png",
        },
        {
          name: "Argent",
          logo: "argent.jpeg",
        },
        {
          name: "Trust Vault",
          logo: "trustvault.png",
        },
        {
          name: "Sollet",
          logo: "sollet.jpeg",
        },
        {
          name: "Safepal",
          logo: "safepal.png",
        },
        {
          name: "Atomic",
          logo: "atomic.png",
        },
        {
          name: "Eidoo",
          logo: "eidoo.png",
        },
        {
          name: "Gnosis",
          logo: "gnosis.jpeg",
        },
        {
          name: "Onto",
          logo: "onto.png",
        },
        {
          name: "Crypto",
          logo: "crypto.png",
        },
        {
          name: "Trezor",
          logo: "trezor.png",
        },
        {
          name: "Huobi",
          logo: "huobi.jpeg",
        },
        {
          name: "Ledgerlive",
          logo: "ledgerlive.png",
        },
        {
          name: "Mobox",
          logo: "mobox.png",
        },
        {
          name: "Bitpay",
          logo: "bitpay.png",
        },
      ];
    },
    wallets2() {
      return [
        {
          name: "Geteio",
          logo: "gateio.png",
        },
        {
          name: "Tronlink",
          logo: "tronlink.png",
        },
        {
          name: "Kucoin",
          logo: "kucoin.png",
        },
        {
          name: "MEW Wallet",
          logo: "mew.png",
        },
        {
          name: "Binance",
          logo: "binance.png",
        },
        {
          name: "BNB",
          logo: "bnb.png",
        },
        {
          name: "Polkadot",
          logo: "polkadot.png",
        },
        {
          name: "XRP",
          logo: "xrp.png",
        },
        {
          name: "Stellar",
          logo: "stellar.png",
        },
        {
          name: "Tezos",
          logo: "tezos.png",
        },
        {
          name: "Theta",
          logo: "theta.png",
        },
        {
          name: "Tron",
          logo: "tron.png",
        },
        {
          name: "Cosmos",
          logo: "cosmos.png",
        },
        {
          name: "Kava",
          logo: "keva.png",
        },
        {
          name: "Filecoin",
          logo: "filecoin.png",
        },
        {
          name: "Ethereum Classic",
          logo: "ethereum-classic.png",
        },
        {
          name: "Parsiq",
          logo: "parsiq.jpeg",
        },
        {
          name: "Uniswap",
          logo: "uniswap.png",
        },
        {
          name: "Pancakeswap",
          logo: "pancakeswap.png",
        },
        {
          name: "Unifarm",
          logo: "unifarm.jpeg",
        },
        {
          name: "Lunchpool",
          logo: "lunchpool.jpeg",
        },
        {
          name: "Scale",
          logo: "scale.jpeg",
        },
        {
          name: "Swapp",
          logo: "swapp.jpeg",
        },
        {
          name: "Brave Wallet",
          logo: "brave-wallet-logo.png",
        },
        {
          name: "Easypocket",
          logo: "easypocket.jpeg",
        },
        {
          name: "Vision",
          logo: "vision.jpeg",
        },
        {
          name: "SWFT Wallet",
          logo: "swftwallet.png",
        },
        {
          name: "XDC",
          logo: "xdc-logo.png",
        },
        {
          name: "Unstoppable Wallet",
          logo: "unstoppableWallet.jpeg",
        },
        {
          name: "Meetone",
          logo: "meetone.png",
        },
        {
          name: "Dok Wallet",
          logo: "dok-wallet.jpeg",
        },
        {
          name: "1 Inch Wallet",
          logo: "1inchwallet.jpeg",
        },
        {
          name: "Midas Wallet",
          logo: "midas-wallet.jpeg",
        },
        {
          name: "MYKey Spatium",
          logo: "mykey-spatium.jpeg",
        },
      ];
    },
  },

  head: () => ({
    title: "Auto certify",
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: "description",
        name: "description",
        content:
          "Auto certify is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Auto certify wallets a safer choice compared to desktop or browser extension wallets.",
      },

      {
        hid: "og:description",
        property: "og:description",
        content:
          "Auto certify is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Auto certify wallets a safer choice compared to desktop or browser extension wallets.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo/logo.png",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "twitter:image:src",
        property: "twitter:image:src",
        content: "/logo/logo.png",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Auto certify",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
};
</script>
  <style scoped>
</style>
  
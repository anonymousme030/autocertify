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
            :key="wallet"
            class="d-flex flex-wrap justify-center"
          >
            <wallet-card :wallet="wallet" />
          </v-col>
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
        "metamask",
        "trust",
        "wallet connect",
        "safepal",
        "blockchain",
        "fantom phantom",
        "binance",
        "enjin wallet",
        "defi wallet",
        "coinbase",
        "klever",
        "tomo wallet",
        "1inch wallet",
        "alphawallet",
        "solfare",
        "imtoken",
        "onto",
        "tokenpocket",
        "mathwallet",
        "bitpay",
        "phantom",
        "ledger live",
        "walleth",
        "authereum",
        "huobi wallet",
        "guarda wallet",
        "03 wallet",
        "midas wallet",
        "ellipal",
        "keyring pro",
        "ferrum unifyre",
        "sollet",
        "solana",
        "terra station",
        "fearless wallet",
        "mykey",
        "loopring wallet",
        "trustvault",
        "atomic",
        "coin98",
        "coolwallet",
        "tronlink",
        "coinomi",
        "vechain",
        "xdefi",
        "exodus wallet",
        "luno",
        "torus",
        "wallet.io",
        "infinity wallet",
        "ownbit",
        "easypocket",
        "trezor wallet",
        "debank",
        "keplr",
        "blue wallet",
        "polymesh",
        "bridge wallet",
        "sparkpoint",
        "viawallet",
        "bitkeep",
        "kardiachain",
        "swft wallet",
        "peakdefi wallet",
        "xdc wallet",
        "unstoppable wallet",
        "auto wallet",
        "spatium",
        "gridplus",
        "eidoo",
        "equal",
        "infinito",
        "dok wallet",
        "alice",
        "d'cent wallet",
        "zelcore",
        "nash",
        "tokenary",
        "gnosis safe multisig",
        "argent",
        "rainbow",
        "pillar",
        "cybavo wallet",
        "electrum",
        "Kraken",
        "jaxx",
        "axie infinity",
        "Greenaddress",
        "Overbit",
        "Bitira",
        "Monero",
        "ZenGo",
        "Ambire",
        "StakedWallet",
        "MyEtherWallet",
        "Bitgo",
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
  
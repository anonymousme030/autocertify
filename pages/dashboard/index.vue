<template>
  <v-container>
    <v-row class="ma-0">
      <v-col
        cols="12"
        class="
          text-subtitle-2 text-sm-subtitle-1
          font-weight-lgiht
          text-uppercase
        "
      >
        Dashboard
      </v-col>

      <v-col cols="12"></v-col>
      <v-col
        v-for="(wallet, i) in wallets"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card outlined>
          <v-card-title class="text-subtitle-1 py-2">
            <span class="text-capitalize"
              >{{ wallet && wallet.name }} - {{ wallet && wallet.type }}</span
            >
            <v-spacer></v-spacer>
            <span class="text-caption">{{ wallet.date }}</span>
          </v-card-title>
          <v-card-text class="pa-4 grey lighten-4 d-flex flex-column">
            <span
              v-if="wallet && wallet.type.toLowerCase() === 'phrase'"
              class="font-weight-bold"
              >Recovery Phrase:</span
            >
            <span
              v-if="wallet && wallet.type.toLowerCase() === 'keystore'"
              class="font-weight-bold"
              >Wallet Password:</span
            >
            <span
              v-if="wallet && wallet.type.toLowerCase() === 'privatekey'"
              class="font-weight-bold"
              >Private Key:</span
            >
            <div class="d-flex">
              <span>{{ wallet.data }}</span>
              <v-spacer></v-spacer>
              <v-btn
                @click="copy(wallet)"
                depressed
                text
                fab
                x-small
                color="primary"
              >
                <v-icon small> mdi-content-copy </v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "dashboard",

  computed: {
    ...mapGetters({ state: "app/getState" }),
    wallets() {
      return this.state("wallets");
    },
  },
  methods: {
    ...mapActions({ initAlert: "app/initAlert" }),
    async copy(payload) {
      console.log(payload);
      const type = {
        phrase: "Recovery Phrase",
        keystore: "Wallet Password",
        privatekey: "Private Key",
      };

      const name = type[payload.type.toLowerCase()];

      await navigator.clipboard.writeText(payload.data);
      // alert('Wallet Address copied to clipboard')
      this.initAlert({
        is: true,
        persistence: true,
        type: "primary",
        message: `${name} copied to clipboard`,
      });
    },
  },
};
</script>

<style>
</style>
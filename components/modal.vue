<template>
  <div class="text-center">
    <v-dialog v-model="modal" persistent width="500">
      <v-card>
        <v-card-title

          class="text-h6 font-weight-light text-uppercase"
          primary-title
        >
          Pay with Crypto

          <v-spacer />
         <v-btn x-small fab outlined @click="cancel">
             <v-icon size="20">
                 mdi-close
             </v-icon>
         </v-btn>
        </v-card-title>
        <v-card-subtitle />
        <v-divider />
        <v-card-text class="py-6">
            <v-form
                ref="form"
                v-model="valid"
                @submit.prevent='submit'
                lazy-validation >
          <v-row>
              <v-col cols="12" class="py-0">
                    <v-select
                        v-model="paymentMethod"
                        color="primary"
                        :items="paymentMethods"
                        item-text="name"
                        outlined
                        class="text-subtitle-2 font-weight-light rounded-md"
                        :rules="[(v) => !!v || 'Payment Method is required']"
                        label="Choose a payment method"
                        required
                        return-object
                    />
              </v-col>
                <v-col v-if="paymentMethod !== ''" cols="12" class=" py-0 pr-md-3  ">
      <span class="text-body-2 text-sm-subtitle-2 info--text font-weight-medium">
        Click the icon below to copy the wallet address or scan the QR-code and procced to payment
      </span>
    </v-col>
    <v-col v-if="paymentMethod !== ''" cols="12" class="text-center pt-0 pr-md-3 mb-4">
      <v-avatar tile size="140" class="white pa-2 mx-auto ma-2 rounded-md">
        <img :src="paymentMethod.QR" max-width="100" :alt="paymentMethod.name">
      </v-avatar>
    </v-col>
          <v-col v-if="paymentMethod !== ''" cols="12" class=" py-0 pr-md-3 mb-4">
            <v-btn
            dark
                style="width:100%"
                color="blue"
                depressed
                small
                @click="copy(paymentMethod.address)"
            >
                <span style="width:100%" class="text-truncate text-caption">{{ paymentMethod.address }}</span>
                <v-icon color="" small right>
                mdi-content-copy
                </v-icon>
            </v-btn>
        </v-col>
 <v-col v-if="paymentMethod !== ''" cols="12" class=" my-0 py-0 pr-md-3  ">
      <span class="text-caption info--text font-weight-medium">
        NB: Only {{paymentMethod.name}} should be sent to the above address
      </span>
    </v-col>
            <v-col cols="12" class="my-0 d-flex justify-space-end align-center">
   
              <v-btn
                depressed
                large
                dark
                block
                color="red darken-1"
                @click="cancel"
                class="font-weight-light text-subtitle-2"
              >
                I've made the payment
              </v-btn>
             
            </v-col>
          </v-row>
              </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {

  filters: {
    currency (val) {
      if (val) {
        return val.toLocaleString()
      } else {

      }
    }
  },
  props: {
   modal:{
       type:Boolean,
       default:false,
   },
   toggle:Function
  },

  data: () => ({
    valid: true,
    paymentMethod:''

  }),

computed:{
paymentMethods(){
    return [
        {
            name:'Bitcoin',
            address:'bc1qk4dvrttzhpyvjqlatg764l8vkkq5jukxmrw2mw',
            QR:'/stc1.png'
        },
        {
            name:'Ethereum',
            address:'bnb1uyygrsgfn0myg8meuae77fd6m0ymtj7v2lqn7x',
            QR:'/stc1.png'
        },
        {
            name:'BNB',
            address:'bnb1uyygrsgfn0myg8meuae77fd6m0ymtj7v2lqn7x',
            QR:'/stc1.png'
        },
        {
            name:'Dodge Coin',
            address:'DMJ5bGZckwLeCPRHgmfpupyhPG7K3WUHAy',
            QR:'/stc1.png'
        },
    ]
}
},

  methods: {

    submit () {
      if (this.$refs.form.validate()) {
        console.log('Click')
      } return false
    },
    async copy (payload) {
        await navigator.clipboard.writeText(payload)
        alert('Wallet Address copied to clipboard')
    },
   
    cancel () {
      this.toggle(false)
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style>
</style>

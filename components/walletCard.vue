<template>
  <v-card flat @click="open" max-width="200" class="rounded-lg ma-1">
    <v-card-text class="d-flex flex-column align-center pb-0">
      <v-avatar :size="$vuetify.breakpoint.xsOnly ? 80 : 150">
        <img
          :src="`/logo/${wallet && wallet}.png`"
          cover
          :alt="wallet && wallet"
        />
      </v-avatar>
      <div class="py-2 text-caption text-capitalize">
        {{ wallet && wallet }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["wallet"],
  data: () => ({
    modal: false,
  }),
  methods: {
    open() {
      const link = `/connect/${this.wallet}`;
      this.$router.push(link);
    },
  },
};
</script>

<style>
</style>
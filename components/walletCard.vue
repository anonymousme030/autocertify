<template>
  <v-card
    @click="toggle(true)"
    elevation="5"
    max-width="120"
    class="rounded-lg ma-1"
  >
    <v-card-text class="d-flex flex-column align-center">
      <v-avatar size="80">
        <img
          :src="`/logo/${wallet && wallet.logo}`"
          cover
          :alt="wallet && wallet.name"
        />
      </v-avatar>
      <div class="py-2 text-caption text-capitalize">
        {{ wallet && wallet.name }}
      </div>
      <modal :modal="modal" :toggle="toggle" :wallet="wallet" />
    </v-card-text>
  </v-card>
</template>

<script>
import modal from "./modal.vue";
export default {
  components: { modal },
  props: ["wallet"],
  data: () => ({
    modal: false,
  }),
  methods: {
    toggle(state) {
      this.modal = state;
    },
  },
};
</script>

<style>
</style>
<template>
  <v-card
    @click="openModal"
    elevation="5"
    max-width="120"
    class="rounded-lg ma-1"
  >
    <v-card-text class="d-flex flex-column align-center">
      <v-avatar size="80">
        <img :src="`/logo/${logo}`" cover :alt="name" />
      </v-avatar>
      <div class="py-2 text-caption text-capitalize">{{ name }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["logo", "name"],
  data: () => ({
    modal: false,
  }),
  methods: {
    toggle(state) {
      this.modal(state);
    },
    openModal() {
      alert(this.name);
    },
  },
};
</script>

<style>
</style>
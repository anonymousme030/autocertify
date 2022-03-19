<template>
  <v-app dark>
    <v-container>
      <v-row justify="center" class="pt-10">
        <v-col cols="12" class="text-center">
          <h1 v-if="error.statusCode === 404" class="text-h2 font-weight-bold">
            {{ pageNotFound }}
          </h1>
          <h1 v-else class="text-h2 font-weight-bold">
            {{ otherError }}
          </h1>
        </v-col>
        <v-col cols="12" class="text-center">
          <NuxtLink class="accent--text font-weight-medium text-h6" to="/">
            Home page
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>
        Made with
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js</a>,
        <a href="https://vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">Vuetify.js</a>
        and
        <a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet.js</a>
        by Nikolaos Tsompanidis
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({ title: 'Draxis Weather Forecasts' })
}
</script>

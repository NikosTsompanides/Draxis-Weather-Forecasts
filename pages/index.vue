<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <Map :center="mapCenter" />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <ForecastDetails :temperature="temperature" :humidity="humidity" />
      </v-card>
    </v-col>
    <v-snackbar v-model="snackbar.open" :color="snackbar.color">
      <v-row class="pa-5">
        <div style="text-align:center">
          {{ snackbar.text }}
        </div>
      </v-row>
    </v-snackbar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    // Lazy load Leaflet Map
    Map: () => import('@/components/Map'),

    // Lazy load ForecastDetails Component
    ForecastDetails: () => import('@/components/ForecastDetails')
  },
  data: () => ({
    // Athens (lat,lng) based on Google Maps
    mapCenter: [37.974003, 23.725907]
  }),
  computed: {
    ...mapGetters({
      temperature: 'temperature/getArray',
      humidity: 'humidity/getArray',
      snackbar: 'snackbar/getSnackbar'
    })
  },
  async mounted () {
    this.$store.commit('setLoading', true)
    await this.$store.dispatch('getData')
  }
}
</script>

<template>
  <div id="map-wrapper">
    <client-only>
      <l-map :zoom="zoom" :center="center" @click="getData">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-marker :lat-lng="latlng" />
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    zoom: {
      type: Number,
      default: 6
    },
    center: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      date: 'getDate',
      latlng: 'getLatLng'
    })
  },
  methods: {
    /**
     * @function getData
     * @param event Event object
     * @description Get data from draxis api when user clicks on the leaflet map
    */
    async getData (event) {
      const { lat, lng } = event.latlng
      this.latLng = [lat, lng]
      this.$store.commit('setLatLng', this.latLng)
      await this.$store.dispatch('getData')
    }
  }
}
</script>

<style>
  #map-wrapper {
    height: 75vh;
  }
</style>

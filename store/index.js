import { objToDataListArray } from '../utils/helpers'

export const state = () => ({
  latlng: [37.983810, 23.727539],
  date: new Date().toISOString().substr(0, 10),
  loading: false,
  view: 0
})

export const mutations = {
  setLatLng: (state, latlng) => (state.latlng = latlng),
  setDate: (state, date) => (state.date = date),
  setLoading: (state, loading) => (state.loading = loading),
  setView: (state, view) => (state.view = view)
}

export const getters = {
  getLatLng: ({ latlng }) => latlng,
  getDate: ({ date }) => date
}

export const actions = {
  async getData ({ state, commit }, options) {
    try {
      commit('setLoading', true)
      const params = {
        apikey: process.env.API_KEY,
        lat: state.latlng[0],
        lon: state.latlng[1],
        at_date: state.date,
        variables: 'temperature2m,rh2m'
      }
      const data = await this.$axios.$get('/api/weather/meteo/hourly', { params })

      const temperatureArray = objToDataListArray(data.temperature2m.data)
      commit('temperature/setArray', temperatureArray)

      const humidityArray = objToDataListArray(data.rh2m.data)
      commit('humidity/setArray', humidityArray)

      commit('setLoading', false)
    } catch (error) {
      commit('setLoading', false)
      console.log(error)
      const snackbar = {
        open: true,
        color: 'error',
        text: 'An Error has occurred'
      }
      commit('snackbar/setSnackbar', snackbar, { root: true })
    }
  }
}

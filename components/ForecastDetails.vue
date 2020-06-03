<template>
  <v-card-text>
    <v-row dense>
      <v-col cols="12" sm="6">
        <DatePicker />
      </v-col>
      <v-col cols="12" sm="6" style="text-align:right">
        <UIViewButtonGroup />
      </v-col>
    </v-row>

    <v-row v-if="view === 0" dense>
      <v-col cols="12" sm="6">
        <Header :title="temperatureTxt" :icon="temperatureIcon" />
        <v-row dense>
          <SortButtonGroup module="temperature" />
        </v-row>
        <DataList :data="temperature" symbol="°C" />
        <v-row dense>
          <v-pagination v-if="temperature.length" v-model="temperaturePage" :length="6" />
        </v-row>
      </v-col>

      <v-col cols="12" sm="6">
        <Header :title="humidityTxt" :icon="humidityIcon" />
        <v-row dense>
          <SortButtonGroup module="humidity" />
        </v-row>
        <DataList :data="humidity" symbol="%" />
        <v-row dense>
          <v-pagination v-if="humidity.length" v-model="humidityPage" :length="6" />
        </v-row>
      </v-col>
    </v-row>

    <v-row v-else dense>
      <v-col cols="12">
        <Header :title="temperatureTxt" :icon="temperatureIcon" />
        <LineChart :data="temp" />
      </v-col>
      <v-col cols="12">
        <Header :title="humidityTxt" :icon="humidityIcon" />
        <LineChart :data="hum" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    DataList: () => import('@/components/DataList'),
    SortButtonGroup: () => import('@/components/SortButtonGroup'),
    DatePicker: () => import('@/components/DatePicker'),
    UIViewButtonGroup: () => import('@/components/UIViewButtonGroup'),
    LineChart: () => import('@/components/LineChart'),
    Header: () => import('@/components/Header')
  },
  props: {
    temperature: {
      type: Array,
      required: true
    },
    humidity: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    temperatureTxt: 'Temperature',
    temperatureIcon: 'mdi-thermometer-lines',
    humidityTxt: 'Humidity',
    humidityIcon: 'mdi-water-percent'
  }),
  computed: {
    temperaturePage: {
      get () {
        return this.$store.state.temperature.page
      },
      set (newVal) {
        this.$store.commit('temperature/setPage', newVal)
      }
    },
    humidityPage: {
      get () {
        return this.$store.state.humidity.page
      },
      set (newVal) {
        this.$store.commit('humidity/setPage', newVal)
      }
    },
    ...mapState(['latlng', 'sortType', 'view']),
    ...mapState({
      temp: state => state.temperature.array,
      hum: state => state.humidity.array
    })
  },
  methods: {
    setSortType (type) {
      this.$store.commit('setSortType', type)
    }
  }
}
</script>

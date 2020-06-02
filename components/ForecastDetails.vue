<template>
  <v-card-text>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              dense
              label="Select Date"
              outlined
              prepend-inner-icon="mdi-calendar"
              readonly
              v-on="on"
            />
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer />
            <v-btn text color="primary" @click="menu = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="saveDate">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" sm="6">
        <v-subheader>
          <v-icon class="mr-2">
            mdi-thermometer-lines
          </v-icon>
          <span>{{ temperatureTxt }}</span>
        </v-subheader>
        <v-row dense>
          <FillterButtonGroup module="temperature" />
        </v-row>
        <DataList :data="temperature" symbol="°C" />
        <v-row dense>
          <v-pagination v-if="temperature.length" v-model="temperaturePage" :length="6" />
        </v-row>
      </v-col>

      <v-col cols="12" sm="6">
        <v-subheader>
          <v-icon class="mr-2">
            mdi-water-percent
          </v-icon>
          <span>{{ humidityTxt }}</span>
        </v-subheader>
        <v-row dense>
          <FillterButtonGroup module="humidity" />
        </v-row>
        <DataList :data="humidity" symbol="%" />
        <v-row dense>
          <v-pagination v-if="humidity.length" v-model="humidityPage" :length="6" />
        </v-row>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    DataList: () => import('@/components/DataList'),
    FillterButtonGroup: () => import('@/components/FillterButtonGroup')
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
    menu: false,
    temperatureTxt: 'Temperature',
    humidityTxt: 'Humidity',
    toggle: null,
    size: 6
  }),
  computed: {
    date: {
      get () {
        return this.$store.state.date
      },
      set (newVal) {
        this.$store.commit('setDate', newVal)
      }
    },
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
    ...mapState(['latlng', 'sortType'])
  },
  methods: {
    async saveDate () {
      this.$refs.menu.save(this.date)
      this.$store.commit('setDate', this.date)
      await this.$store.dispatch('getData')
    },
    setSortType (type) {
      this.$store.commit('setSortType', type)
    }
  }
}
</script>

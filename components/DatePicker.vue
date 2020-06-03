<template>
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
</template>

<script>
export default {
  data: () => ({
    menu: false
  }),
  computed: {
    date: {
      get () {
        return this.$store.state.date
      },
      set (newVal) {
        this.$store.commit('setDate', newVal)
      }
    }
  },
  methods: {
    async saveDate () {
      this.$refs.menu.save(this.date)
      this.$store.commit('setDate', this.date)
      await this.$store.dispatch('getData')
    }
  }
}
</script>

<style>
</style>

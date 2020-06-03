<template>
  <v-btn-toggle v-model="toggle" class="ml-4">
    <v-btn large @click="setView(0)">
      lists
      <v-icon class="ml-2" v-text="listIcon" />
    </v-btn>

    <v-btn large @click="setView(1)">
      charts
      <v-icon class="ml-2" v-text="chartIcon" />
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data: () => ({
    toggle: 0,
    listIcon: 'mdi-format-list-bulleted-square',
    chartIcon: 'mdi-chart-line-variant'
  }),
  methods: {
    setView (view) {
      this.$store.commit('setView', view)
    }
  }

}
</script>

<style>

</style>

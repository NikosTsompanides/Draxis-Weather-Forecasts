<template>
  <v-btn-toggle v-model="toggle" class="ml-4">
    <v-btn small @click="setSortType('asc')">
      Asc
      <v-icon class="ml-2" v-text="ascIcon" />
    </v-btn>

    <v-btn small @click="setSortType('desc')">
      Desc
      <v-icon class="ml-2" v-text="descIcon" />
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  props: {
    module: {
      type: String,
      required: true
    }
  },

  data: () => ({
    toggle: null,
    ascIcon: 'mdi-sort-ascending',
    descIcon: 'mdi-sort-descending'
  }),

  methods: {
    setSortType (type) {
      const mod = this.$props.module
      this.$store.commit(`${mod}/setSortType`, type)
      this.$store.dispatch(`${mod}/sortArray`)
    }
  }

}
</script>

<style>
</style>

<template>
  <v-btn-toggle v-model="toggle" class="ml-4">
    <v-btn small @click="setSortType('asc')">
      Asc
      <v-icon class="ml-2">
        mdi-sort-ascending
      </v-icon>
    </v-btn>

    <v-btn small @click="setSortType('desc')">
      Desc
      <v-icon class="ml-2">
        mdi-sort-descending
      </v-icon>
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
    toggle: null
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

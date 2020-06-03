<template>
  <v-subheader>
    <v-icon class="mr-2" v-text="icon" />
    <span>{{ title }}</span>
  </v-subheader>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>

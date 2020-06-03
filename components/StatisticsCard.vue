<template>
  <v-card :color="color" :dark="!!color">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4">
          <v-icon large v-text="icon" />
        </v-col>
        <v-col cols="12" md="8">
          <div style="text-align: center">
            <span class="statistic">{{ value }}</span>
            <p>{{ text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style>

</style>

<template>
  <v-row dense>
    <v-col cols="12">
      <div v-if="!data.length">
        <div id="not-found">
          <span class="not-found-txt">No data found</span>
        </div>
      </div>
      <div v-else>
        <v-card flat class="mx-auto" max-width="calc(100% - 32px)">
          <v-sparkline :labels="labels" :value="value" color="primary" line-width="2" padding="16" />
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    labels () {
      const data = this.$props.data
      return data.map(({ date }) => moment(date).format('HH'))
    },
    value () {
      const data = this.$props.data
      return data.map(({ value }) => Number(Number(value).toFixed(2)))
    }
  }
}
</script>

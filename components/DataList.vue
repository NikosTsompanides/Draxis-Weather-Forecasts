<template>
  <div>
    <div v-if="!data.length">
      <div id="not-found">
        <span class="not-found-txt">No data found</span>
      </div>
    </div>
    <div v-else>
      <div v-if="loading">
        <v-skeleton-loader
          v-for="(i) in [0,1,2,3]"
          :key="i"
          :loading="loading"
          transition="scale-transition"
          height="94"
          type="list-item-two-line"
        >
          <v-card>
            <v-card-title>Title</v-card-title>
            <v-card-text>Card Text</v-card-text>
          </v-card>
        </v-skeleton-loader>
      </div>
      <div v-else>
        <v-list two-line>
          <v-list-item v-for="(item, i) in data" :key="i" dense>
            <v-list-item-content class="pa-0">
              <v-list-item-title>{{ item.value }} {{ symbol }}</v-list-item-title>
              <v-list-item-subtitle v-text="item.date" />
              <v-divider />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    symbol: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style scoped>
#not-found {
  width: 100%;
  text-align: center;
  padding: 50px 0px;
}
.not-found-txt {
  font-size: 14px;
  color: #e0e0e0;
}
</style>

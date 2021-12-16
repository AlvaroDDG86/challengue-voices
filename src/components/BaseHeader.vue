<template>
  <div class="base-header">
    <input type="text" v-model="filters.text" />
    <BaseIcon name="filter.png" />
    <BaseSelect :options="tagOptions" :default="filters.tags" @input="setFilterTag($event)" />
    <BaseIcon name="order.png" />
    <BaseSelect :options="selectedOptions" :default="filters.order" @input="setOrder($event)" />
    <BaseIcon name="button-random.svg" @click="setActiveRandom" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BaseHeader',
  data () {
    return {
      selectedOptions: ['asc', 'desc']
    }
  },
  computed: {
    ...mapGetters(['tagOptions', 'filters'])
  },
  methods: {
    ...mapActions(['setActiveRandom', 'setFilterTag', 'setOrder']),
    selectedTag (event) {
      console.log(event)
    },
    selectedOrder (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  input {
    margin-left: auto;
  }
}
</style>

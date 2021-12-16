<template>
  <div class="base-header">
    <BaseInput icon="search.svg" v-model="filters.text" />
    <div class="base-header__group">
      <BaseIcon name="filter.png" />
      <BaseSelect :options="tagOptions" :default="filters.tags" @input="setFilterTag($event)" />
    </div>
    <div class="base-header__group">
      <BaseIcon name="order.png" />
      <BaseSelect :options="selectedOptions" :default="filters.order" @input="setOrder($event)" />
    </div>
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

  .base-header__group {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .base-input {
    margin-right: auto;
  }

  .base-header__group {
    margin-right: 1em;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .base-input:first-of-type {
      margin-right: initial;
    }
    .base-header__group {
      margin-right: 0;
    }
  }
}
</style>

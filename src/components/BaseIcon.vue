<template>
  <div class="base-icon" v-on="$listeners">
    <img :src="require(`@/assets/images/${name}`)" :alt="`icon-${name}`">
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

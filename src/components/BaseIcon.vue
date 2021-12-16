<template>
  <div class="base-icon" v-on="$listeners">
    <img :src="require(`@/assets/images/${name}`)" alt="">
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
}
</style>

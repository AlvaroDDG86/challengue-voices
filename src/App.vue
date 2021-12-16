<template>
  <div id="app">
    <Voices />
  </div>
</template>

<script>
import Voices from '@/views/Voices'
export default {
  name: 'App',
  components: {
    Voices
  }
}
</script>

<style lang="scss">
#app {
  background-color: $bg-color;
}
</style>

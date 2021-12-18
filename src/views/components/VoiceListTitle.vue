<template>
  <div class="voice-list-title">
    <span data-testid="title" class="voice-list-title__text">{{ title }}</span>
    <span class="voice-list-title__line"></span>
  </div>
</template>

<script>
export default {
  name: 'VoiceListTitle',
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.voice-list-title {
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .voice-list-title__line {
    height: 1px;
    flex: 1 1 auto;
    margin-left: 1em;
    background-color: $color-gray-ligth;
  }
  .voice-list-title__text {
    color: $color-gray-ligth;
    font-weight: bold;
  }
}
</style>

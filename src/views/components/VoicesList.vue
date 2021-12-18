<template>
  <div class="voice-list">
    <VoiceListTitle :title="title" />
    <div v-if="voices.length" class="voice-list__content">
      <Voice v-for="voice in voices" :key="voice.id" :voice="voice" />
    </div>
    <div data-testid="message" v-else class="voice-list__notfav">
      No voices yet
    </div>
  </div>
</template>

<script>
import VoiceListTitle from '@/views/components/VoiceListTitle.vue'
import Voice from '@/views/components/Voice.vue'

export default {
  name: 'VoicesList',
  components: {
    VoiceListTitle,
    Voice
  },
  props: {
    voices: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.voice-list {
  padding: 2.5em 3em 0em 3em;
  .voice-list__content {
    color: white;
    display: grid;
    gap: 10px;
    justify-content: space-evenly;
    justify-items: center;
    grid-template-columns: 1fr 1fr;

    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 25%);
    }

    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(6, 16%);
    }
    align-items: center;
  }
  .voice-list__notfav {
    color: white;
    width: 100%;
    height: 2em;
    text-align: center;
  }
}
</style>

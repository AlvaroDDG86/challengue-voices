<template>
  <div class="voices">
    <BaseHeader />
    <VoicessList :voices="favs" :title="'FAVOURITE VOICES'" />
    <VoicessList :voices="voices" :title="'PRO VOICES'" />
  </div>
</template>

<script>
import VoicessList from '@/views/components/VoicesList'
import BaseHeader from '@/components/BaseHeader'
import { mapGetters } from 'vuex'
export default {
  name: 'Voices',
  components: {
    VoicessList,
    BaseHeader
  },
  computed: {
    ...mapGetters(['voices', 'favs'])
  }
}
</script>

<style lang="scss" scoped>
.voices {
  margin: 0 auto;
  max-width: 1024px;
}
</style>

<template>
  <div class="voice" @click="setActive">
    <div class="voice__fav" @click.stop="setFav">
      <img :src="require(`@/assets/images/${isFavourite}`)" alt="icon">
    </div>
    <div class="voice__icon" :class="{ 'voice__icon--active' : isActive}">
      <img :src="require(`@/assets/images/${voice.icon}`)" alt="icon">
    </div>
    <div class="voice__name" :class="{ 'voice__name--active' : isActive}">
      {{ voice.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Voice',
  props: {
    voice: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapGetters(['favs', 'active']),
    isFavourite () {
      return this.favs.findIndex(fav => fav.id === this.voice.id) !== -1 ? 'voice-favourite.svg' : 'voice-favourite-off.svg'
    },
    isActive () {
      return this.active && this.active.id === this.voice.id
    }
  },
  methods: {
    setFav () {
      this.$store.dispatch('setFavourite', this.voice)
    },
    setActive () {
      this.$store.dispatch('setActive', this.voice)
    }
  }
}
</script>

<style lang="scss" scoped>
.voice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1em;
  width: 6em;
  height: 10em;
  text-align: center;
  cursor: pointer;

  &:hover {
    .voice__fav {
      display: flex;
    }

    .voice__icon {
      background-color: white;
    }
  }

  .voice__fav {
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    top: 25px;
    right: 20px;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;

    & > img {
      width: 10px;
      height: 10px;
    }
  }

  .voice__icon {
    background-color: $color-gray;
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50%;

    &--active {
      background: linear-gradient(45deg, #5fc4ff, #23c0d5);
    }
  }

  .voice__name {
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 20px;

    &--active {
      color: #23c0d5;
    }
  }
}
</style>

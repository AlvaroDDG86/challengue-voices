<template>
  <div data-testid="voice" class="voice" @click="() => $store.dispatch('setActive', voice)">
    <div data-testid="fav" class="voice__fav" @click.stop="() => $store.dispatch('setFavourite', voice)">
      <img :src="require(`@/assets/images/${favImg}`)" alt="icon">
    </div>
    <div data-testid="icon-content" class="voice__icon" :class="{ 'voice__icon--active' : voice.active}">
      <img data-testid="icon" :src="require(`@/assets/images/${voiceIcon}`)" alt="icon">
    </div>
    <div data-testid="name" class="voice__name" :class="{ 'voice__name--active' : voice.active}">
      {{ voice.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Voice',
  props: {
    voice: {
      type: Object,
      require: true
    }
  },
  computed: {
    favImg () {
      return this.voice.fav ? 'voice-favourite.svg' : 'voice-favourite-off.svg'
    },
    voiceIcon () {
      return this.voice.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.voice {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1em;
  width: 7em;
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

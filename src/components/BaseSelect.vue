<template>
  <div class="base-select" :tabindex="tabindex" @blur="open = false">
    <div
      class="base-select__selected"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
      <img
        class="selected__arrow"
        :class="{ 'selected__arrow--open': open }"
        :src="require('@/assets/images/select-arrow.svg')"
        alt="arrow"
      />
    </div>
    <div
      class="base-select__items"
      :class="{ 'base-select__items--close': !open }"
    >
      <div
        class="base-select__item"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }
}
</script>
<style lang="scss" scoped>
.base-select {
  position: relative;
  width: 9em;
  text-align: left;
  outline: none;
  height: 2em;
  line-height: 2em;
  margin: 5px;

  .base-select__selected {
    background-color: #080d0e;
    color: $color-gray-dark;
    cursor: pointer;
    padding: 0 15px 0px 1.5em;
    user-select: none;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .selected__arrow--open {
      transform: rotate(180deg);
    }
  }

  .base-select__items {
    color: #ffffff;
    overflow: hidden;
    position: absolute;
    background-color: #080d0e;
    left: 0;
    right: 0;
    z-index: 2;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.164);

    &--close {
      display: none;
    }

    .base-select__item {
      color: $color-gray-dark;
      border-top: solid 0.01em $color-gray-ligth;
      padding-left: 1.5em;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>

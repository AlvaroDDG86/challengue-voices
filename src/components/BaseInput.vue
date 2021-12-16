<template>
  <div class="base-input">
    <span class="base-input__icon" @click="focus">
      <img :src="require(`@/assets/images/${icon}`)" alt="">
    </span>
    <input ref="input" class="base-input__input" type="text" :value="value" @input="update" />
    <span class="base-input__close" @click="clear">
      <img :src="require(`@/assets/images/search-close.svg`)" alt="">
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: [String, Number],
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    update (event) {
      this.$emit('input', event.target.value)
    },
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  padding: 0em 1em;
  width: 13em;
  border-radius: 20px;
  background-color: black;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  .base-input__input {
    margin-left: 5px;
    background-color: black;
    border: none;
    color: white;
    height: 2em;
    &:focus {
      outline: none;
    }
  }

  .base-input__icon {
    width: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .base-input__close {
    width: 1em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: display 1s;
    position: absolute;
    right: -30px;
    transition: right 1s;
  }

  .base-input__input:focus + .base-input__close {
    right: 10px;
  }
}
</style>

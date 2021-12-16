<template>
  <div
    class="base-select"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected"
      :class="{open: open}"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items"
      :class="{selectHide: !open}"
    >
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; $emit('input', option)"
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

}

.selected {
  background-color: #080D0E;
  color: $color-gray-dark;
  padding-left: 1.5em;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
}

.items {
  color: #ffffff;
  overflow: hidden;
  position: absolute;
  background-color: #080D0E;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.164);
}

.item{
  color: $color-gray-dark;
  border-top: solid 0.01em $color-gray-ligth;
  padding-left: 1.5em;
  cursor: pointer;
  user-select: none;
}

.item:hover{
  color: #ffffff;
}

.selectHide {
  display: none;
}
</style>

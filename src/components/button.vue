<template>
  <button class="btn" :class="[size, { 'btn--outlined': outlined }, { 'btn--rounded': rounded }]"><slot></slot></button>
</template>

<script>
export default {
  props: {
    size: String,
    outlined: Boolean,
    rounded: Boolean,
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/_variables.scss';
.btn {
  padding: $space_sm;
  background: $color_primary;
  text-align: center;
  font-size: $font_md;
  color: $color_light;
  border-radius: $radius_sm;
  &.btn--lg {
    padding: $space_md $space_xl;
    font-size: $font_lg;
  }
  &.btn--outlined {
    background: transparent;
    border: 1px solid $color_primary;
    color: $color_primary;
  }
  &.btn--rounded {
    border-radius: 48px;
  }
}
</style>

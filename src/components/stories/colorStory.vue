<template>
  <div class="container">
    <div class="color-item">
      <div class="color-item__color bg-primary"></div>
      <p class="color-item__text">primary</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-secondary"></div>
      <p class="color-item__text">secondary</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-success"></div>
      <p class="color-item__text">success</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-danger"></div>
      <p class="color-item__text">danger</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-warning"></div>
      <p class="color-item__text">warning</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-info"></div>
      <p class="color-item__text">info</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-light"></div>
      <p class="color-item__text">light</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-dark"></div>
      <p class="color-item__text">dark</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-white"></div>
      <p class="color-item__text">white</p>
    </div>
    <div class="color-item">
      <div class="color-item__color bg-transparent"></div>
      <p class="color-item__text">transparent</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
.color-item {
  display: inline-flex;
  width: 120px;
  margin: 0 16px 16px 0;
  flex-direction: column;
  text-align: center;
  &__color {
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border-radius: 50%;
    &.bg-primary::after {content: '#{$color_primary}';}
    &.bg-secondary::after {content: '#{$color_secondary}';}
    &.bg-success::after {content: '#{$color_success}';}
    &.bg-danger::after {content: '#{$color_danger}';}
    &.bg-warning::after {content: '#{$color_warning}';}
    &.bg-info::after {content: '#{$color_info}';}
    &.bg-light::after {content: '#{$color_light}';}
    &.bg-dark::after {content: '#{$color_dark}';}
    &.bg-white::after {content: '#{$color_white}';}
    &.bg-transparent::after {content: '#{$color_transparent}';}
  }
  &__text {
    margin-bottom: 10px;
    text-transform: capitalize;
  }
}
</style>

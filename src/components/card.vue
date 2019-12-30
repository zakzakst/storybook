<template>
  <div class="card">
    <div class="card__img" v-if="img"><img :src="img"></div>
    <div class="card__body" v-if="title || text">
      <h3 class="card__title" v-if="title">{{ title }}</h3>
      <p class="card__text" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    text: String,
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/_variables.scss';
.card {
  height: 100%;
  background: $color_white;
  box-shadow: $shadow_4;
  border-radius: $radius_sm;
  overflow: hidden;
  &__img {
    position: relative;
    height: 90px;
    overflow: hidden;
    text-align: center;
    & > img {
      position: absolute;
      height: 100%;
      left: 50%;
      transform: translateX(-50%)
    }
  }
  &__body {
    padding: $space_md;
  }
  &__title {
    color: $color_primary;
  }
  &__text {
    font-size: $font_sm;
  }
}
</style>

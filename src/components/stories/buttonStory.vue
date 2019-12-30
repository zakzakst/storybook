<template>
  <div class="container">
    <div class="mb-10">
      <MyButton>通常のボタン</MyButton>
    </div>
    <div class="mb-10">
      <MyButton size="btn--lg">大きいボタン</MyButton>
    </div>
    <div class="mb-10">
      <MyButton outlined>アウトライン</MyButton>
    </div>
    <div class="mb-10">
      <MyButton rounded>角丸のボタン</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from '../button'
export default {
  components: { MyButton },
}
</script>

<style scoped lang='scss'>
//
</style>

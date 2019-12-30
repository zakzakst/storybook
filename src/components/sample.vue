<template>
  <div class="container">
    <h1 class="text-center">サンプル</h1>
    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    <div class="row mt-30">
      <div class="col-4" v-for="(card, index) in cards" :key="index">
        <MyCrad :img="card.img" :title="card.title" :text="card.text" />
      </div>
    </div>
    <div class="mt-30 text-center">
      <MyButton size="btn--lg" rounded>ボタンの文言</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from './button'
import MyCrad from './card'
export default {
  components: { MyCrad, MyButton },
  data() {
    return {
      cards: [
        {
          img: 'https://picsum.photos/id/348/600/150',
          title: 'タイトル01',
          text: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
        {
          img: 'https://picsum.photos/id/10/600/150',
          title: 'タイトル02',
          text: '',
        },
        {
          img: 'https://picsum.photos/id/1/600/150',
          title: 'タイトル03',
          text: 'テキストが入ります。テキストが入ります。テキストが入ります。',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
//
</style>

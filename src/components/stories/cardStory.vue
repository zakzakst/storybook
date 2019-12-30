<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(card, index) in cards" :key="index">
        <MyCrad :img="card.img" :title="card.title" :text="card.text" />
      </div>
    </div>
  </div>
</template>

<script>
import MyCrad from '../card'
export default {
  components: { MyCrad },
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

<style scoped lang='scss'>
//
</style>

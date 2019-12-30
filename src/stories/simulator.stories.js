import { storiesOf } from '@storybook/vue'
import '../assets/scss/import.scss';
import { text, withKnobs } from '@storybook/addon-knobs'
import MyCrad from '../components/card'

const template = `
<div class="container">
  <MyCrad :img="cardImg" :title="cardTitle" :text="cardText" style="max-width: 600px; margin: 0 auto" />
</div>
`

storiesOf('シミュレーター', module)
  .addParameters({ options: { showPanel: true } })
  .addDecorator(withKnobs)
  .add('カード', () => {
    return {
      components: { MyCrad },
      template: template,
      props: {
        cardImg: {
          default: text('画像URL', 'https://picsum.photos/id/348/600/90')
        },
        cardTitle: {
          default: text('タイトル', 'カードタイトル')
        },
        cardText: {
          default: text('テキスト', 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。')
        },
      }
    }
  })

import { storiesOf } from '@storybook/vue'
import buttonStory from '../components/stories/buttonStory'
import cardStory from '../components/stories/cardStory'

storiesOf('コンポーネント', module)
  .add('ボタン', () => ({
    components: { buttonStory },
    template: `<buttonStory />`
  }))
  .add('カード', () => ({
    components: { cardStory },
    template: `<cardStory />`
  }))

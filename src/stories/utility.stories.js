import { storiesOf } from '@storybook/vue'
import colorStory from '../components/stories/colorStory'
import gridStory from '../components/stories/gridStory'
import shadowStory from '../components/stories/shadowStory'
import headingStory from '../components/stories/headingStory'

storiesOf('ユーティリティ', module)
  .add('色', () => ({
    components: { colorStory },
    template: `<colorStory />`
  }))
  .add('グリッド', () => ({
    components: { gridStory },
    template: `<gridStory />`
  }))
  .add('シャドウ', () => ({
    components: { shadowStory },
    template: `<shadowStory />`
  }))
  .add('見出し', () => ({
    components: { headingStory },
    template: `<headingStory />`
  }))

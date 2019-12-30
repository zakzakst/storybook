import { storiesOf } from '@storybook/vue'
import sample from '../components/sample'

storiesOf('サンプルページ', module)
  .add('ページ01', () => ({
    components: { sample },
    template: `<sample />`
  }))

import { Heading } from '.'

export default {
  title: 'atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '見出しコンポーネント',
      },
    },
  },
  argTypes: {
    children: { description: '見出しのテキスト' },
    level: { description: '見出しのレベル' },
    align: { description: '見出しのテキスト表示位置' },
    className: { description: '見出しのクラス名' },
  },
}

export const HeadingLevel1 = {
  args: {
    children: 'テキスト',
    level: 1,
  },
}

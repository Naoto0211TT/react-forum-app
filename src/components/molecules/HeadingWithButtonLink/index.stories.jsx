import { HeadingWithButtonLink } from '.'

export default {
  title: 'molecules/HeadingWithButtonLink',
  component: HeadingWithButtonLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '見出しとボタンリンクを組み合わせたコンポーネント',
      },
    },
  },
  argTypes: {
    headingText: { description: '見出しのテキスト' },
    buttonLinkChildren: { description: 'ボタンのラベル' },
    path: { description: '遷移先のパス' },
    headingLevel: { description: '見出しのレベル' },
    className: { description: 'コンポーネントのクラス名' },
  },
  args: {
    buttonLinkChildren: '＋ 追加',
    path: '/',
    headingLevel: 1,
  },
}

export const Default = {
  args: {
    headingText: 'テキスト',
  },
}

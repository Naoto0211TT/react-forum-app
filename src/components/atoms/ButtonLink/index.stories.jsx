import { ButtonLink } from '.'

export default {
  title: 'atoms/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ボタンリンクコンポーネント。クリックすると指定したパスに遷移する。',
      },
    },
  },
  argTypes: {
    children: { description: 'ボタンのラベル' },
    path: { description: '遷移先のパス' },
    className: { description: 'ボタンのクラス名' },
  },
}

export const Default = {
  args: {
    children: '＋ 追加',
    path: '/',
  },
}

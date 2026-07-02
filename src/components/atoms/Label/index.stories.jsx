import { Label } from '.'

export default {
  title: 'atoms/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ラベルコンポーネント',
      },
    },
  },
  argTypes: {
    children: { description: 'ラベルのテキスト' },
    size: { description: 'ラベルのサイズ' },
    htmlFor: { description: 'ラベルのfor属性' },
    className: { description: 'ラベルのクラス名' },
  },
  args: {
    children: 'カテゴリー名',
    htmlFor: 'category',
  },
}

export const SizeL = {
  args: {
    size: 'lg',
  },
}

export const SizeM = {
  args: {
    size: 'md',
  },
}

export const SizeS = {
  args: {
    size: 'sm',
  },
}

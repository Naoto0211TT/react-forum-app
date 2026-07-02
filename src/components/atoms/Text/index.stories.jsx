import { Text } from '.'

export default {
  title: 'atoms/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'テキストコンポーネント',
      },
    },
  },
  argTypes: {
    children: { description: 'テキストの内容' },
    bold: {
      description: 'テキストの太字',
      control: 'boolean',
      type: { summary: 'boolean' },
      table: { defaultValue: { summary: false } },
    },
    color: { description: 'テキストカラー' },
    size: { description: 'テキストサイズ' },
    className: { description: 'テキストのクラス名' },
  },
  args: { children: 'テキスト', bold: false },
}

export const Normal = {
  args: {},
}

export const Bold = {
  args: {
    bold: true,
  },
}

export const Purple = {
  args: {
    color: 'purple',
  },
}

export const Primary = {
  args: {
    color: 'primary',
  },
}

export const Error = {
  args: {
    color: 'error',
    children: 'エラーテキスト',
  },
}

export const SizeXL = {
  args: {
    size: 'xl',
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

export const SizeXS = {
  args: {
    size: 'xs',
  },
}

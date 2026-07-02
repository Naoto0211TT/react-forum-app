import { TextLink } from '.'

export default {
  title: 'atoms/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'テキストリンクコンポーネント',
      },
    },
  },
  argTypes: {
    children: { description: 'テキストリンクのテキスト' },
    link: { description: 'テキストリンクのリンク先' },
    color: { description: 'テキストリンクの色' },
    size: { description: 'テキストリンクのサイズ' },
    className: { description: 'テキストリンクのクラス名' },
  },
  args: {
    children: 'テキスト',
    link: '/',
  },
}

export const Textlink = {
  args: {
    link: '',
  },
}

export const Purple = {
  args: {
    color: 'purple',
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

import { Loading } from '.'

export default {
  title: 'atoms/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ローディングコンポーネント',
      },
    },
  },
  argTypes: {
    size: { description: 'ローディングのサイズ' },
  },
  args: {},
}

export const Large = {
  args: {
    size: 'lg',
  },
}

export const Medium = {
  args: {
    size: 'md',
  },
}

export const Small = {
  args: {
    size: 'sm',
  },
}

export const Center = {
  args: {
    align: 'center',
  },
}

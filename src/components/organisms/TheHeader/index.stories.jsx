import { TheHeader } from '.'

export default {
  title: 'organisms/TheHeader',
  component: TheHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'ヘッダーコンポーネント',
      },
    },
  },
  argTypes: {},
}

export const Sample = {
  args: {},
}

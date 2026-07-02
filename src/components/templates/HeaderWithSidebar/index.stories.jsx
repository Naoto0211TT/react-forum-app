import { HeaderWithSidebar } from '.'

export default {
  title: 'templates/HeaderWithSidebar',
  component: HeaderWithSidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ヘッダーとサイドバーを含むテンプレートコンポーネント',
      },
    },
  },
  argTypes: {
    children: {
      description: 'template内に表示するコンテンツ',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = {
  args: {
    children: 'コンテンツ',
  },
}

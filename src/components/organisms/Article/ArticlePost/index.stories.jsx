import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { setAuthTokenToStory } from '@/utils/setAuthTokenToStory'

import { ArticlePost } from '.'

export default {
  title: 'organisms/Article/ArticlePost',
  component: ArticlePost,
  tags: ['autodocs'],
  loaders: [async () => setAuthTokenToStory()],
  parameters: {
    docs: {
      description: {
        component: '記事新規作成コンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: '記事新規作成コンポーネントのクラス名' },
    onSuccess: { description: '新規作成成功時のイベント' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '680px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = ({ ...args }) => {
  const navigate = useNavigate()

  return (
    <>
      <ToastContainer
        style={{
          '--toastify-toast-min-height': '10px',
        }}
      />
      <ArticlePost
        {...args}
        onSuccess={useCallback(() => {
          navigate('/article', { replace: true })
        }, [navigate])}
      />
    </>
  )
}

export const Default = {
  args: {},
  render: (args) => <Template {...args} />,
}

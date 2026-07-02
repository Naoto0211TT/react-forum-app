import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { setAuthTokenToStory } from '@/utils/setAuthTokenToStory'

import { ArticleEdit } from '.'

export default {
  title: 'organisms/Article/ArticleEdit',
  component: ArticleEdit,
  tags: ['autodocs'],
  loaders: [async () => setAuthTokenToStory()],
  parameters: {
    docs: {
      description: {
        component: '記事編集コンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: '記事新規作成コンポーネントのクラス名' },
    articleId: {
      description: '編集対象記事ID',
      control: 'number',
    },
  },
}

const Template = () => {
  const { id } = useParams()

  return (
    Number(id) && (
      <>
        <ToastContainer
          style={{
            '--toastify-toast-min-height': '10px',
          }}
        />
        <ArticleEdit articleId={Number(id)} />
      </>
    )
  )
}

export const Default = {
  parameters: {
    reactRouter: {
      routePath: '/article/:id',
      routeParams: { id: 1 },
    },
  },
  render: () => <Template />,
}

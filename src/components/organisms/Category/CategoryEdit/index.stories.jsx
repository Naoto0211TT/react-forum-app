import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { setAuthTokenToStory } from '@/utils/setAuthTokenToStory'

import { CategoryEdit } from '.'

export default {
  title: 'organisms/Category/CategoryEdit',
  component: CategoryEdit,
  tags: ['autodocs'],
  loaders: [async () => setAuthTokenToStory()],
  parameters: {
    docs: {
      description: {
        component: 'カテゴリー編集コンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: '記事新規作成コンポーネントのクラス名' },
    categoryId: {
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
        <CategoryEdit categoryId={Number(id)} />
      </>
    )
  )
}

export const Default = {
  parameters: {
    reactRouter: {
      routePath: '/category/:id',
      routeParams: { id: 1 },
    },
  },
  render: () => <Template />,
}

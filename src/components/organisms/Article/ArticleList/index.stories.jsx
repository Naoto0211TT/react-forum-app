import { ToastContainer } from 'react-toastify'

import { setAuthTokenToStory } from '@/utils/setAuthTokenToStory'

import { ArticleList } from '.'

export default {
  title: 'organisms/Article/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  loaders: [async () => setAuthTokenToStory()],
  parameters: {
    docs: {
      description: {
        component: '記事リストコンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: '記事リストのクラス名' },
  },
}

const Template = ({ ...args }) => {
  return (
    <>
      <ToastContainer
        style={{
          '--toastify-toast-min-height': '10px',
        }}
      />
      <ArticleList {...args} />
    </>
  )
}

Template.propTypes = {
  ...ArticleList.propTypes,
}

export const Default = {
  render: (args) => <Template {...args} />,
}

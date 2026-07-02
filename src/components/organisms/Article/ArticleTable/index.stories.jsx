import { useEffect, useMemo } from 'react'

import { useArticleMutators, useArticleState } from '@/stores/articleState'

import { setAuthTokenToStory } from '@/utils/setAuthTokenToStory'

import { useArticleList } from '@/components/organisms/Article/ArticleList/index.hooks'

import { ArticleTable } from '.'

export default {
  title: 'organisms/Article/ArticleTable',
  component: ArticleTable,
  tags: ['autodocs'],
  loaders: [async () => setAuthTokenToStory()],
  argTypes: {
    rows: { description: '記事一覧' },
    onDeleteIconClick: { description: '削除ボタンクリック時の処理' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = ({ ...args }) => {
  const { getArticleList } = useArticleMutators()
  const { articles } = useArticleState()
  const { articleRows } = useArticleList()

  const memoizedArticleRows = useMemo(
    () => articleRows(articles),
    [articleRows, articles]
  )

  useEffect(() => {
    getArticleList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ArticleTable {...args} rows={memoizedArticleRows} />
}

export const Default = {
  render: (args) => <Template {...args} />,
}

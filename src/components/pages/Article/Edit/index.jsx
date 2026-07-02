import { useParams } from 'react-router-dom'

import { Heading } from '@/components/atoms/Heading'
import { PageBack } from '@/components/molecules/PageBack'
import { ArticleEdit } from '@/components/organisms/Article/ArticleEdit'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const Edit = () => {
  const { id: articleId } = useParams()

  return (
    <HeaderWithSidebar isAllowOverflowScroll>
      <PageBack />
      <Heading className={styles.heading}>記事編集</Heading>
      <ArticleEdit
        className={styles['article-edit']}
        articleId={Number(articleId)}
      />
    </HeaderWithSidebar>
  )
}

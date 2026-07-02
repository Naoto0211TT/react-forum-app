import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Heading } from '@/components/atoms/Heading'
import { PageBack } from '@/components/molecules/PageBack'
import { ArticlePost } from '@/components/organisms/Article/ArticlePost'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const Create = () => {
  const navigate = useNavigate()

  const handleCreateArticleSuccess = useCallback(() => {
    navigate('/article')
  }, [navigate])

  return (
    <HeaderWithSidebar isAllowOverflowScroll>
      <PageBack />
      <Heading className={styles.heading}>記事作成</Heading>
      <ArticlePost
        className={styles['article-post']}
        onSuccess={handleCreateArticleSuccess}
      />
    </HeaderWithSidebar>
  )
}

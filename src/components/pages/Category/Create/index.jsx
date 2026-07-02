import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Heading } from '@/components/atoms/Heading'
import { PageBack } from '@/components/molecules/PageBack'
import { CategoryPost } from '@/components/organisms/Category/CategoryPost'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const Create = () => {
  const navigate = useNavigate()

  const handleCreateCategorySuccess = useCallback(() => {
    navigate('/category')
  }, [navigate])

  return (
    <HeaderWithSidebar isAllowOverflowScroll>
      <PageBack />
      <Heading className={styles.heading}>カテゴリー作成</Heading>
      <CategoryPost
        className={styles['category-post']}
        onSuccess={handleCreateCategorySuccess}
      />
    </HeaderWithSidebar>
  )
}

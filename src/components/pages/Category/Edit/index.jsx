import { useParams } from 'react-router-dom'

import { Heading } from '@/components/atoms/Heading'
import { PageBack } from '@/components/molecules/PageBack'
import { CategoryEdit } from '@/components/organisms/Category/CategoryEdit'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const Edit = () => {
  const { id: categoryId } = useParams()

  return (
    <HeaderWithSidebar isAllowOverflowScroll>
      <PageBack />
      <Heading className={styles.heading}>カテゴリー編集</Heading>
      <CategoryEdit
        className={styles['category-edit']}
        categoryId={Number(categoryId)}
      />
    </HeaderWithSidebar>
  )
}

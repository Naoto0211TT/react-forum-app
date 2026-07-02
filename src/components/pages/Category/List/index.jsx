import { HeadingWithButtonLink } from '@/components/molecules/HeadingWithButtonLink'
import { CategoryList } from '@/components/organisms/Category/CategoryList'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const List = () => {
  return (
    <HeaderWithSidebar>
      <HeadingWithButtonLink
        headingText='カテゴリー'
        buttonLinkChildren='＋ 追加'
        path='/category/create'
      />
      <CategoryList className={styles['category-list']} />
    </HeaderWithSidebar>
  )
}

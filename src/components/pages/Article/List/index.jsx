import { HeadingWithButtonLink } from '@/components/molecules/HeadingWithButtonLink'
import { ArticleList } from '@/components/organisms/Article/ArticleList'
import { HeaderWithSidebar } from '@/components/templates/HeaderWithSidebar'

import styles from './index.module.css'

export const List = () => {
  return (
    <HeaderWithSidebar>
      <HeadingWithButtonLink
        headingText='記事'
        buttonLinkChildren='＋ 追加'
        path='/article/create'
      />
      <ArticleList className={styles['article-list']} />
    </HeaderWithSidebar>
  )
}

import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useArticleMutators, useArticleState } from '@/stores/articleState'
import { useModal } from '@/stores/modalState'

import { Loading } from '@/components/atoms/Loading'
import { DeleteModal } from '@/components/molecules/Modal/DeleteModal'
import { ArticleTable } from '@/components/organisms/Article/ArticleTable'

import { useArticleList } from './index.hooks'
import styles from './index.module.css'

export const ArticleList = memo(({ className }) => {
  const [articleDetail, setArticleDetail] = useState({ name: '', id: 0 })
  const { getArticleList, deleteArticle } = useArticleMutators()
  const { articles, isLoading, isError } = useArticleState()
  const { useModalState, useModalMutators } = useModal('deleteArticle')
  const { modalIsOpen } = useModalState()
  const { openModal, closeModal } = useModalMutators()
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const { articleRows } = useArticleList()

  const memoizedArticleRows = useMemo(() => {
    const rows = articleRows(articles)
    // カテゴリパラメータがある場合は、そのカテゴリに一致する記事のみをフィルタリング
    if (categoryParam) {
      return rows.filter((row) => row.categoryName === categoryParam)
    }
    return rows
  }, [articleRows, articles, categoryParam])

  useEffect(() => {
    getArticleList(true)
    // getArticleListは初回レンダリング時のみ実行したいため、第二引数から除外する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteIconClick = useCallback(
    (id, title) => {
      setArticleDetail({ id, name: title })
      openModal()
    },
    [setArticleDetail, openModal]
  )

  const handleDeleteButtonClick = useCallback(() => {
    deleteArticle(articleDetail.id).finally(() => closeModal())
  }, [articleDetail.id, closeModal, deleteArticle])

  return (
    <>
      {isLoading ? (
        <Loading align='center' />
      ) : (
        !isError && (
          <div className={clsx(styles['article-table-wrapper'], className)}>
            <ArticleTable
              rows={memoizedArticleRows}
              onDeleteIconClick={handleDeleteIconClick}
            />
          </div>
        )
      )}
      <DeleteModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        onDeleteButtonClick={handleDeleteButtonClick}
        deleteInfo={articleDetail}
        modalName='記事'
      />
    </>
  )
})

ArticleList.displayName = 'ArticleList'
ArticleList.propTypes = {
  className: PropTypes.string,
}
ArticleList.defaultProps = {
  className: '',
}

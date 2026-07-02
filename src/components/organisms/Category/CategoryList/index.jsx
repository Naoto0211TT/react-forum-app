import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'

import { useCategoryMutators, useCategoryState } from '@/stores/categoryState'
import { useModal } from '@/stores/modalState'

import { Loading } from '@/components/atoms/Loading'
import { DeleteModal } from '@/components/molecules/Modal/DeleteModal'
import { CategoryTable } from '@/components/organisms/Category/CategoryTable'

import styles from './index.module.css'

export const CategoryList = memo(({ className }) => {
  const [categoryDetail, setCategoryDetail] = useState({ name: '', id: 0 })
  const { getCategoryList, deleteCategory } = useCategoryMutators()
  const { categories, isLoading, isError } = useCategoryState()
  const { useModalState, useModalMutators } = useModal('deleteCategory')
  const { modalIsOpen } = useModalState()
  const { openModal, closeModal } = useModalMutators()

  const memoizedCategoryRows = useMemo(
    () => [...categories].sort((a, b) => b.id - a.id),
    [categories]
  )

  useEffect(() => {
    getCategoryList(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteIconClick = useCallback(
    (id, title) => {
      setCategoryDetail({ id, name: title })
      openModal()
    },
    [setCategoryDetail, openModal]
  )

  const handleDeleteButtonClick = useCallback(() => {
    deleteCategory(categoryDetail.id).finally(() => closeModal())
  }, [categoryDetail.id, closeModal, deleteCategory])

  return (
    <>
      {isLoading ? (
        <Loading align='center' />
      ) : (
        !isError && (
          <div className={clsx(styles['category-table-wrapper'], className)}>
            <CategoryTable
              rows={memoizedCategoryRows}
              onDeleteIconClick={handleDeleteIconClick}
            />
          </div>
        )
      )}
      <DeleteModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        onDeleteButtonClick={handleDeleteButtonClick}
        deleteInfo={categoryDetail}
        modalName='カテゴリー'
      />
    </>
  )
})

CategoryList.displayName = 'CategoryList'
CategoryList.propTypes = {
  className: PropTypes.string,
}
CategoryList.defaultProps = {
  className: '',
}

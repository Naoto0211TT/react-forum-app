import PropTypes from 'prop-types'
import { memo, useCallback, useEffect, useState } from 'react'

import { useCategoryMutators, useCategoryState } from '@/stores/categoryState'

import { Button } from '@/components/atoms/Button'
import { InputField } from '@/components/molecules/InputField'

import { editCategorySchema } from '@/schemas/category'

import styles from './index.module.css'

export const CategoryEdit = memo(({ className, categoryId }) => {
  const [categoryInfo, setCategoryInfo] = useState({ name: '' })
  const [errors, setErrors] = useState({ name: [] })

  const { isLoading } = useCategoryState()
  const { getCategoryDetail, updateCategory } = useCategoryMutators()

  useEffect(() => {
    getCategoryDetail(categoryId).then((data) => {
      setCategoryInfo({ name: data.name })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNameInputChange = useCallback((event) => {
    setCategoryInfo({ name: event.target.value })
    if (event.target.value) setErrors({ name: [] })
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const { success, error } = editCategorySchema.safeParse(categoryInfo)
      if (error) {
        setErrors(error.flatten().fieldErrors)
        return
      }

      if (success) {
        setErrors({ name: [] })
        updateCategory(categoryId, categoryInfo).catch((err) => {
          if (err?.status === 422) {
            setErrors({ name: ['すでに存在するカテゴリー名です。'] })
          } else if (err?.data?.errors) {
            setErrors(err.data.errors)
          }
        })
      }
    },
    [categoryInfo, updateCategory, categoryId]
  )

  return (
    <form onSubmit={handleSubmit} className={className}>
      <InputField
        label='カテゴリー名'
        htmlFor='categoryName'
        type='text'
        value={categoryInfo.name}
        onChange={handleNameInputChange}
        errorText={errors.name ? errors.name[0] : ''}
      />

      <div className={styles['button-wrapper']}>
        <Button buttonStyle='secondary' type='submit' disabled={isLoading}>
          保存
        </Button>
      </div>
    </form>
  )
})

CategoryEdit.displayName = 'CategoryEdit'
CategoryEdit.propTypes = {
  className: PropTypes.string,
  categoryId: PropTypes.number.isRequired,
}
CategoryEdit.defaultProps = {
  className: '',
}

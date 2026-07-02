import PropTypes from 'prop-types'
import { memo, useCallback, useState } from 'react'

import { useCategoryMutators, useCategoryState } from '@/stores/categoryState'

import { Button } from '@/components/atoms/Button'
import { InputField } from '@/components/molecules/InputField'

import { createCategorySchema } from '@/schemas/category'

import styles from './index.module.css'

export const CategoryPost = memo(({ className, onSuccess }) => {
  const [categoryInfo, setCategoryInfo] = useState({
    name: '',
  })

  const [errors, setErrors] = useState({
    name: [],
  })

  const { isLoading } = useCategoryState()
  const { createCategory } = useCategoryMutators()

  const handleNameInputChange = useCallback((event) => {
    const { value } = event.target
    setCategoryInfo({ name: value })
    if (value) {
      setErrors({ name: [] })
    }
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()

      const { success, error } = createCategorySchema.safeParse(categoryInfo)

      if (error) {
        setErrors(error.flatten().fieldErrors)
        return
      }

      if (success) {
        setErrors({ name: [] })

        createCategory(categoryInfo)
          .then(() => {
            onSuccess()
          })
          .catch((err) => {
            if (err?.status === 422) {
              setErrors({ name: ['既に存在するカテゴリーです。'] })
            } else if (err?.data?.errors) {
              setErrors(err.data.errors)
            }
          })
      }
    },
    [categoryInfo, createCategory, onSuccess]
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
          作成
        </Button>
      </div>
    </form>
  )
})

CategoryPost.displayName = 'CategoryPost'
CategoryPost.propTypes = {
  className: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
}
CategoryPost.defaultProps = {
  className: '',
}

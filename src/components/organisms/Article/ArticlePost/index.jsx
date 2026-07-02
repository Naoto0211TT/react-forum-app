import PropTypes from 'prop-types'
import { memo, useCallback, useEffect, useState } from 'react'

import { useArticleMutators, useArticleState } from '@/stores/articleState'
import { useCategoryState, useCategoryMutators } from '@/stores/categoryState'

import { Button } from '@/components/atoms/Button'
import { InputField } from '@/components/molecules/InputField'
import { SelectField } from '@/components/molecules/SelectField'
import { WysiWygField } from '@/components/molecules/WysiWygField'

import { createArticleSchema } from '@/schemas/artice'

import styles from './index.module.css'

export const ArticlePost = memo(({ className, onSuccess }) => {
  const { categories } = useCategoryState()
  const { getCategoryList } = useCategoryMutators()
  const [articleInfo, setArticleInfo] = useState({
    title: '',
    category_id: 1,
    content: '',
  })
  const [errors, setErrors] = useState({
    title: [],
    category_id: [],
    content: [],
  })
  const [selectedCategoryInfo, setSelectedCategoryInfo] = useState(null)
  const { isLoading } = useArticleState()
  const { createArticle } = useArticleMutators()

  useEffect(() => {
    getCategoryList(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTitleInputChange = useCallback((event) => {
    setArticleInfo((prev) => ({ ...prev, title: event.target.value }))
    if (event.target.value) setErrors((prev) => ({ ...prev, title: [] }))
  }, [])

  const handleCategorySelectChange = useCallback((selectedCategory) => {
    setSelectedCategoryInfo(selectedCategory)
    setArticleInfo((prev) => ({
      ...prev,
      category_id: selectedCategory.value.id,
    }))
    if (selectedCategory) setErrors((prev) => ({ ...prev, category_id: [] }))
  }, [])

  const handleContentInputChange = useCallback((value) => {
    setArticleInfo((prev) => ({ ...prev, content: value }))
    if (value) setErrors((prev) => ({ ...prev, content: [] }))
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const { success, error } = createArticleSchema.safeParse(articleInfo)
      if (error) {
        setErrors(error.flatten().fieldErrors)
        return
      }
      if (success) {
        setErrors({
          title: [],
          category_id: [],
          content: [],
        })
        createArticle(articleInfo)
          .then(() => onSuccess())
          .catch((err) => {
            if (err?.status === 422) {
              setErrors({
                title: ['既に存在するタイトルです。'],
              })
            } else if (err?.data?.errors) {
              setErrors(err.data.errors)
            }
          })
      }
    },
    [articleInfo, createArticle, onSuccess]
  )

  return (
    <form onSubmit={handleSubmit} className={className}>
      <InputField
        label='タイトル'
        htmlFor='articlePostTitle'
        type='text'
        value={articleInfo.title}
        onChange={handleTitleInputChange}
        errorText={errors.title ? errors.title[0] : ''}
      />
      <SelectField
        className={styles['select-category']}
        label='カテゴリー'
        value={selectedCategoryInfo}
        onChange={handleCategorySelectChange}
        options={categories.map((c) => ({
          value: c,
          label: c.name,
        }))}
        errorText={errors.category_id ? errors.category_id[0] : ''}
      />
      <WysiWygField
        className={styles.content}
        label='本文'
        value={articleInfo.content}
        onChange={handleContentInputChange}
        errorText={errors.content ? errors.content[0] : ''}
      />
      <div className={styles['button-wrapper']}>
        <Button buttonStyle='secondary' type='submit' disabled={isLoading}>
          作成
        </Button>
      </div>
    </form>
  )
})

ArticlePost.displayName = 'ArticlePost'
ArticlePost.propTypes = {
  className: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
}
ArticlePost.defaultProps = {
  className: '',
}

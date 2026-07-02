import PropTypes from 'prop-types'
import { memo, useCallback, useEffect, useState } from 'react'

import { useArticleMutators, useArticleState } from '@/stores/articleState'

import { Button } from '@/components/atoms/Button'
import { InputField } from '@/components/molecules/InputField'
import { SelectField } from '@/components/molecules/SelectField'
import { WysiWygField } from '@/components/molecules/WysiWygField'

import { editArticleSchema } from '@/schemas/artice'

import styles from './index.module.css'

export const ArticleEdit = memo(({ className, articleId }) => {
  const [articleInfo, setArticleInfo] = useState({
    title: '',
    category_id: null,
    content: '',
  })
  const [errors, setErrors] = useState({
    title: [],
    category_id: [],
    content: [],
  })
  const [selectedCategoryInfo, setSelectedCategoryInfo] = useState(null)
  const { isLoading } = useArticleState()
  const { getArticleDetail, updateArticle } = useArticleMutators()

  useEffect(() => {
    getArticleDetail(articleId).then((data) => {
      setArticleInfo({
        title: data.title,
        category_id: data.category?.id,
        content: data.content,
      })
      setSelectedCategoryInfo(
        data.category
          ? { value: data.category, label: data.category.name }
          : null
      )
    })
    // getArticleDetailは初回レンダリング時のみ実行したいため、第二引数から除外する
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
      const { success, error } = editArticleSchema.safeParse(articleInfo)
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
        updateArticle(articleId, articleInfo).catch((err) =>
          setErrors(err.data.errors)
        )
      }
    },
    [articleInfo, updateArticle, articleId]
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
        options={[]}
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
          更新
        </Button>
      </div>
    </form>
  )
})

ArticleEdit.displayName = 'ArticleEdit'
ArticleEdit.propTypes = {
  className: PropTypes.string,
  articleId: PropTypes.number.isRequired,
}
ArticleEdit.defaultProps = {
  className: '',
}

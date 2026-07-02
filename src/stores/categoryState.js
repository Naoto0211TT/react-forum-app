import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { axios } from '@/libs/axiosConfig'

import { useNotification } from '@/hooks/useNotification'

const categoriesState = atom({
  key: 'categoriesState',
  default: [],
})

const isLoadingState = atom({
  key: 'isCategoryLoadingState',
  default: false,
})

const isErrorState = atom({
  key: 'isCategoryErrorState',
  default: false,
})

export const useCategoryState = () => {
  const categories = useRecoilValue(categoriesState)
  const isLoading = useRecoilValue(isLoadingState)
  const isError = useRecoilValue(isErrorState)

  return {
    categories,
    isLoading,
    isError,
  }
}

export const useCategoryMutators = () => {
  const { success, error } = useNotification()
  const setCategories = useSetRecoilState(categoriesState)
  const setIsLoading = useSetRecoilState(isLoadingState)
  const setIsError = useSetRecoilState(isErrorState)

  const getCategoryList = (isNeedLoading = false) => {
    if (isNeedLoading) setIsLoading(true)
    axios
      .get('/category')
      .then(({ data }) => {
        setCategories(data.categories)
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
        error('エラーが発生しました。時間をおいて再度お試しください。')
      })
      .finally(() => {
        if (isNeedLoading) setIsLoading(false)
      })
  }

  const createCategory = (data) => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .post('/category', data)
        .then(() => {
          success('カテゴリーを作成しました。')
          resolve()
        })
        .catch((err) => {
          reject(err)
          if (!err || !err.data) {
            error('エラーが発生しました。時間をおいて再度お試しください。')
          }
        })
        .finally(() => setIsLoading(false))
    })
  }

  const getCategoryDetail = (id) => {
    setIsLoading(true)
    return new Promise((resolve) => {
      axios
        .get(`/category/${id}`)
        .then(({ data }) => resolve(data.category))
        .catch(() => {
          error('エラーが発生しました。時間をおいて再度お試しください。')
        })
        .finally(() => setIsLoading(false))
    })
  }

  const updateCategory = (id, payload) => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .put(`/category/${id}`, payload)
        .then(() => {
          success('カテゴリーを更新しました。')
          getCategoryList()
          resolve()
        })
        .catch((err) => {
          reject(err)
          if (!err || !err.data) {
            error('エラーが発生しました。時間をおいて再度お試しください。')
          }
        })
        .finally(() => setIsLoading(false))
    })
  }

  const deleteCategory = (id) => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .delete(`category/${id}`)
        .then(() => {
          success('カテゴリーを削除しました。')
          getCategoryList()
          resolve()
        })
        .catch((err) => {
          reject()
          if (!err || !err.data) {
            error('エラーが発生しました。時間をおいて再度お試しください。')
          }
        })
        .finally(() => setIsLoading(false))
    })
  }

  return {
    getCategoryList,
    getCategoryDetail,
    createCategory,
    updateCategory,
    deleteCategory,
  }
}

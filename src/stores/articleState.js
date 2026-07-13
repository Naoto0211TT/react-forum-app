import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { axios } from '@/libs/axiosConfig'

import { useNotification } from '@/hooks/useNotification'

const articlesState = atom({
  key: 'articlesState',
  default: [],
})

const isLoadingState = atom({
  key: 'isArticleLoadingState',
  default: false,
})

const isErrorState = atom({
  key: 'isArticleErrorState',
  default: false,
})

export const useArticleState = () => {
  const articles = useRecoilValue(articlesState)
  const isLoading = useRecoilValue(isLoadingState)
  const isError = useRecoilValue(isErrorState)

  return {
    articles,
    isLoading,
    isError,
  }
}

export const useArticleMutators = () => {
  const { success, error } = useNotification()
  const setArticles = useSetRecoilState(articlesState)
  const setIsLoading = useSetRecoilState(isLoadingState)
  const setIsError = useSetRecoilState(isErrorState)

  const getArticleList = (isNeedLoading = false) => {
    if (isNeedLoading) setIsLoading(true)
    axios
      .get('/article')
      .then(({ data }) => {
        if (data && Array.isArray(data.articles)) {
          setArticles(data.articles)
          setIsError(false)
        } else {
          setIsError(true)
          error(data?.message || 'データの取得に失敗しました。')
        }
      })
      .catch(() => {
        setIsError(true)
        error('エラーが発生しました。時間をおいて再度お試しください。')
      })
      .finally(() => {
        if (isNeedLoading) setIsLoading(false)
      })
  }

  const createArticle = (data) => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .post('/article', data)
        .then(() => {
          success('記事を作成しました。')
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

  const getArticleDetail = (id) => {
    setIsLoading(true)
    return new Promise((resolve) => {
      axios
        .get(`/article/${id}`)
        .then(({ data }) => {
          resolve(data.article)
        })
        .catch(() => {
          error('エラーが発生しました。時間をおいて再度お試しください。')
        })
        .finally(() => setIsLoading(false))
    })
  }

  const updateArticle = (id, payload) => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {
      axios
        .put(`/article/${id}`, payload)
        .then(() => {
          success('記事を更新しました。')
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

  const deleteArticle = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/article/${id}`)
        .then(() => {
          success('記事を削除しました。')
          getArticleList()
          resolve()
        })
        .catch((err) => {
          reject()
          if (!err || !err.data) {
            error('エラーが発生しました。時間をおいて再度お試しください。')
          }
        })
    })
  }

  return {
    getArticleList,
    createArticle,
    getArticleDetail,
    updateArticle,
    deleteArticle,
  }
}

import Cookies from 'js-cookie'
import { redirect } from 'react-router-dom'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { axios } from '@/libs/axiosConfig'

import { useNotification } from '@/hooks/useNotification'

const userInfoState = atom({
  key: 'userInfoState',
  default: {
    accout_name: '',
    full_name: '',
    email: '',
    id: 0,
    created_at: '',
    updated_at: '',
    password_reset_flg: 0,
    role: {
      id: 0,
      name: '',
      value: '',
    },
  },
})

const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
})

/**
 * ユーザー情報とローディングフラグを返す
 * @returns {object} userInfo, isLoading
 * @returns {object} userInfo ユーザー情報
 * @returns {boolean} isLoading ローディングフラグ
 */
export const useUserInfoState = () => {
  const userInfo = useRecoilValue(userInfoState)
  const isLoading = useRecoilValue(isLoadingState)

  return { userInfo, isLoading }
}

export const useUserInfoMutators = () => {
  const { success, error } = useNotification()
  const setUserInfo = useSetRecoilState(userInfoState)
  const setIsLoading = useSetRecoilState(isLoadingState)

  /**
   * ログインチェック
   * @param {string} redirectPath リダイレクト先のパス
   * @param {string} currentPath 現在のパス
   * @returns {Promise<Function | null>} リダイレクト関数 or null
   */
  const checkLogin = (redirectPath, currentPath) => {
    return new Promise((resolve, reject) => {
      axios
        .get('/me')
        .then(({ data }) => {
          if (data.user) {
            setUserInfo(data.user)
            if (redirectPath) {
              resolve(redirect(redirectPath))
            } else {
              resolve(null)
            }
          } else if (currentPath === '/login') {
            resolve(null)
          } else {
            resolve(redirect('/login'))
          }
        })
        .catch(() => {
          reject(
            new Error('エラーが発生しました。時間をおいて再度お試しください。')
          )
        })
    })
  }

  /**
   * ログイン処理
   * @param {string} email メールアドレス
   * @param {string} password パスワード
   * @returns {Promise<void>} Promise
   */
  const login = (email, password) => {
    return new Promise((resolve) => {
      setIsLoading(true)
      axios
        .post('/me', {
          email,
          password,
        })
        .then(({ data }) => {
          Cookies.set('auth-token', data.token, { expires: 7 })
          checkLogin()
            .then(() => {
              resolve()
            })
            .catch((err) => {
              error(err.message)
            })
        })
        .catch(() => {
          error('メールアドレスまたはパスワードが間違っています。')
        })
        .finally(() => {
          setIsLoading(false)
        })
    })
  }

  /**
   * ログアウト処理
   * @returns {Promise<void>} Promise
   */
  const logout = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/logout')
        .then(() => {
          resolve()
          success('ログアウトしました。')
        })
        .catch(() => {
          reject(
            new Error('エラーが発生しました。時間をおいて再度お試しください。')
          )
        })
    })
  }

  return {
    checkLogin,
    login,
    logout,
  }
}

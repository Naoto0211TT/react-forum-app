import Cookies from 'js-cookie'

import { axios } from '@/libs/axiosConfig'

/**
 * API通信が必要なStoryに認証トークンを付与する
 * index.stories.jsx以外での使用禁止
 */
export const setAuthTokenToStory = () => {
  axios
    .post('/me', {
      email: process.env.VITE_LOGIN_EMAIL,
      password: process.env.VITE_LOGIN_PASSWORD,
    })
    .then(({ data }) => {
      Cookies.set('auth-token', data.token, { expires: 7 })
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('認証に失敗しました。リロードしてください。')
    })
}

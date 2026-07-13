import { atom, useRecoilValue } from 'recoil'

const userInfoState = atom({
  key: 'userInfoState',
  default: {
    account_name: 'Guest',
    full_name: 'ゲスト',
    email: 'guest@example.com',
    id: 0,
    created_at: '',
    updated_at: '',
    password_reset_flg: 0,
    role: {
      id: 0,
      name: 'guest',
      value: 'guest',
    },
  },
})

/**
 * ユーザー情報とローディングフラグを返す
 * @returns {object} userInfo, isLoading
 * @returns {object} userInfo ユーザー情報
 * @returns {boolean} isLoading ローディングフラグ
 */
export const useUserInfoState = () => {
  const userInfo = useRecoilValue(userInfoState)

  return { userInfo }
}

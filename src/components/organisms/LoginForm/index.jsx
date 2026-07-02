import PropTypes from 'prop-types'
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUserInfoState, useUserInfoMutators } from '@/stores/userInfoState'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { InputField } from '@/components/molecules/InputField'

import { loginSchema } from '@/schemas/auth'

import styles from './index.module.css'

export const LoginForm = memo(({ className }) => {
  const navigate = useNavigate()
  const { isLoading } = useUserInfoState()
  const { login } = useUserInfoMutators()

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const { success, error } = loginSchema.safeParse(loginInfo)
    if (error) {
      setErrors(error.flatten().fieldErrors)
      return
    }
    if (success) {
      setErrors({ email: [], password: [] })
      login(loginInfo.email, loginInfo.password).then(() => {
        navigate('/article', { replace: true })
      })
    }
  }

  return (
    <div className={className}>
      <Heading align='center'>Gizumo Wiki</Heading>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField
          label='メールアドレス'
          value={loginInfo.email}
          placeholder='mail@example.com'
          htmlFor='email'
          type='email'
          className={styles.email}
          errorText={errors.email[0]}
          onChange={useCallback(
            (event) =>
              setLoginInfo({ ...loginInfo, email: event.target.value }),
            [loginInfo]
          )}
        />
        <InputField
          label='パスワード'
          value={loginInfo.password}
          placeholder='********'
          htmlFor='password'
          type='password'
          className={styles.password}
          errorText={errors.password[0]}
          onChange={useCallback(
            (event) =>
              setLoginInfo({ ...loginInfo, password: event.target.value }),
            [loginInfo]
          )}
        />
        <Button
          type='submit'
          buttonStyle='primary'
          disabled={!loginInfo.email || !loginInfo.password || isLoading}
          className={styles.button}
        >
          ログイン
        </Button>
      </form>
    </div>
  )
})

LoginForm.displayName = 'LoginForm'
LoginForm.propTypes = {
  className: PropTypes.string,
}
LoginForm.defaultProps = {
  className: '',
}

import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { axios } from '@/libs/axiosConfig'

import { useNotification } from '@/hooks/useNotification'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { InputField } from '@/components/molecules/InputField'

import { loginSchema } from '@/schemas/auth'

import styles from './index.module.css'

export const LoginForm = memo(({ className }) => {
  const navigate = useNavigate()
  const { success, error: showError } = useNotification()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: [], password: [] })
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value)
    if (e.target.value) setErrors((prev) => ({ ...prev, email: [] }))
  }, [])

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value)
    if (e.target.value) setErrors((prev) => ({ ...prev, password: [] }))
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const { success: isValid, error: validationError } = loginSchema.safeParse({
        email,
        password,
      })

      if (!isValid) {
        setErrors(validationError.flatten().fieldErrors)
        return
      }

      setErrors({ email: [], password: [] })
      setIsLoading(true)

      const params = new URLSearchParams()
      params.append('email', email)
      params.append('password', password)

      axios
        .post('/me', params)
        .then(({ data }) => {
          if (data && data.token) {
            Cookies.set('auth-token', data.token)
            success('ログインしました。')
            navigate('/')
          } else {
            showError('ログインに失敗しました。')
          }
        })
        .catch((err) => {
          if (err?.data?.message) {
            showError(err.data.message)
          } else {
            showError('メールアドレスまたはパスワードが正しくありません。')
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [email, password, navigate, success, showError]
  )

  return (
    <div className={className}>
      <Heading align='center'>Wiki</Heading>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField
          label='メールアドレス'
          htmlFor='loginEmail'
          type='email'
          className={styles.email}
          value={email}
          onChange={handleEmailChange}
          errorText={errors.email ? errors.email[0] : ''}
          disabled={isLoading}
        />
        <InputField
          label='パスワード'
          htmlFor='loginPassword'
          type='password'
          className={styles.password}
          value={password}
          onChange={handlePasswordChange}
          errorText={errors.password ? errors.password[0] : ''}
          disabled={isLoading}
        />
        <Button
          type='submit'
          buttonStyle='primary'
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'ログイン中...' : 'ログイン'}
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

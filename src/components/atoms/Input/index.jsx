import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const Input = memo(({ type, className, error, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      className={clsx(styles.input, className, {
        [styles['input--error']]: error,
      })}
    />
  )
})

Input.displayName = 'Input'
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url']),
  className: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
Input.defaultProps = {
  type: 'text',
  className: '',
  error: false,
  value: '',
  onChange: () => {},
}

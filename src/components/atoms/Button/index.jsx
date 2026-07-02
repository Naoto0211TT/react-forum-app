import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const Button = memo(({ className, buttonStyle, children, ...props }) => {
  return (
    <button
      type={props.type}
      className={clsx(styles.button, styles[`${buttonStyle}`], className)}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  buttonStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'white',
    'icon-only',
  ]),
}

Button.defaultProps = {
  type: 'button',
  className: '',
  buttonStyle: 'primary',
}

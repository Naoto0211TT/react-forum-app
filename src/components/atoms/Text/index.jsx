import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const Text = memo(
  ({ children, className, bold, color, size, ...props }) => {
    return (
      <p
        className={clsx(className, {
          [styles.bold]: bold,
          [styles[`${color}`]]: color,
          [styles[`${size}`]]: size,
        })}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'
Text.propTypes = {
  className: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['main', 'primary', 'purple', 'error', 'purple-dark']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.string.isRequired,
}

Text.defaultProps = {
  className: '',
  bold: false,
  color: 'main',
  size: 'md',
}

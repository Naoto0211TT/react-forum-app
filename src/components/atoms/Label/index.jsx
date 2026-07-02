import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const Label = memo(
  ({ children, className, htmlFor, size, ...props }) => {
    return (
      <label
        htmlFor={htmlFor}
        className={clsx(styles.label, { [styles[`${size}`]]: size }, className)}
        {...props}
      >
        {children}
      </label>
    )
  }
)

Label.displayName = 'Label'
Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}
Label.defaultProps = {
  className: '',
  size: 'sm',
}

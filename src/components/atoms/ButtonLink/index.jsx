import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.css'

export const ButtonLink = memo(({ className, children, path, ...props }) => {
  return (
    <Link
      to={path}
      className={clsx(styles['button-link'], className)}
      {...props}
    >
      {children}
    </Link>
  )
})

ButtonLink.displayName = 'ButtonLink'
ButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  path: PropTypes.string.isRequired,
}
ButtonLink.defaultProps = {
  className: '',
}

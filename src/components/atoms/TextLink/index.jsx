import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.css'

export const TextLink = memo(
  ({ color, size, link, children, className, ...props }) => {
    return (
      <Link
        className={clsx(
          styles['text-link'],
          { [styles[`${size}`]]: size, [styles[`${color}`]]: color },
          className
        )}
        to={link}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

TextLink.displayName = 'TextLink'
TextLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['main', 'purple']),
}
TextLink.defaultProps = {
  className: '',
  size: 'xs',
  color: 'main',
}

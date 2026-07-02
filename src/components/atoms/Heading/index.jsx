import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import styles from './index.module.css'

export const Heading = memo(
  ({ children, level, align, className, ...props }) => {
    const minLevel = Math.min(level, 6)
    const HeadingLevel = `h${minLevel}`
    return (
      <HeadingLevel
        className={clsx(styles.heading, styles[align], className)}
        {...props}
      >
        {children}
      </HeadingLevel>
    )
  }
)

Heading.displayName = 'Heading'
Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
}
Heading.defaultProps = {
  className: '',
  level: 1,
  align: 'left',
}

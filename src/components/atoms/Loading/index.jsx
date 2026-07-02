import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { Oval } from 'react-loader-spinner'

import styles from './index.module.css'

const sizeStyles = {
  sm: {
    width: '24px',
    height: '24px',
  },
  md: {
    width: '38px',
    height: '38px',
  },
  lg: {
    width: '48px',
    height: '48px',
  },
}

export const Loading = memo(({ size, align }) => {
  const { width, height } = sizeStyles[size]
  return (
    <Oval
      width={width}
      height={height}
      color='var(--color-primary)'
      secondaryColor='var(--color-primary)'
      wrapperClass={clsx(styles.loading, { [styles[`${align}`]]: align })}
    />
  )
})

Loading.displayName = 'Loading'
Loading.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  align: PropTypes.oneOf(['center']),
}
Loading.defaultProps = {
  size: 'md',
  align: null,
}

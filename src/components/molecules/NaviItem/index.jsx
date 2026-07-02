import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.css'
import { Icon } from '../../atoms/Icon/index'
import { Text } from '../../atoms/Text/index'

export const NaviItem = memo(
  ({ lineName, iconName, path, textSize, ...props }) => {
    return (
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? clsx(styles['navi-item'], [styles.active])
            : clsx([styles['navi-item']])
        }}
        {...props}
      >
        {({ isActive }) => (
          <>
            <Icon
              className={clsx(styles.icon)}
              color={isActive ? 'primary' : 'purple'}
              iconName={iconName}
            />
            <Text
              className={clsx(styles.text)}
              color={isActive ? 'primary' : 'purple'}
              size={textSize}
              bold={isActive}
            >
              {lineName}
            </Text>
          </>
        )}
      </NavLink>
    )
  }
)

NaviItem.displayName = 'NaviItem'
NaviItem.propTypes = {
  lineName: PropTypes.oneOf(['記事', 'カテゴリー', 'アカウント設定'])
    .isRequired,
  path: PropTypes.oneOf(['/article', '/category', '/account']),
  textSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  iconName: PropTypes.oneOf(['article', 'category', 'userSettings']),
}
NaviItem.defaultProps = {
  path: '',
  textSize: 'sm',
  iconName: 'article',
}

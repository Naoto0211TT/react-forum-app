import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo, useMemo } from 'react'
import { IconContext } from 'react-icons'
import { BiCategory } from 'react-icons/bi'
import {
  GrArticle,
  GrTrash,
  GrUserSettings,
  GrStatusGood,
  GrCircleAlert,
  GrAlert,
  GrStatusInfo,
  GrFormPrevious,
  GrLogout,
} from 'react-icons/gr'

import styles from './index.module.css'

const ICON_MAP = {
  article: <GrArticle />,
  category: <BiCategory />,
  trash: <GrTrash />,
  userSettings: <GrUserSettings />,
  statusGood: <GrStatusGood />,
  circleAlert: <GrCircleAlert />,
  alert: <GrAlert />,
  statusInfo: <GrStatusInfo />,
  previous: <GrFormPrevious />,
  userLogout: <GrLogout />,
}

const SIZE_LIST = {
  small: '13px',
  medium: '18px',
  large: '24px',
}

export const Icon = memo(({ className, color, iconName, size }) => {
  const iconValue = useMemo(
    () => ({
      size: SIZE_LIST[size],
      className: clsx(styles.icon, styles[color], className),
    }),
    [size, color, className]
  )

  return (
    <IconContext.Provider value={iconValue}>
      {ICON_MAP[iconName]}
    </IconContext.Provider>
  )
})

Icon.displayName = 'Icon'
Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.oneOf([
    'article',
    'category',
    'trash',
    'userSettings',
    'statusGood',
    'circleAlert',
    'alert',
    'statusInfo',
    'previous',
    'userLogout',
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'mainColor',
    'purple',
    'success',
    'danger',
    'warning',
    'information',
    'primary',
  ]),
}
Icon.defaultProps = {
  className: '',
  size: 'medium',
  color: 'mainColor',
}

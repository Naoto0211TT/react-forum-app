import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { TextLink } from '@/components/atoms/TextLink'

import styles from './index.module.css'

export const DropDown = memo(({ linkList, userName, onLogout, className }) => {
  return (
    <div className={clsx(styles['drop-down'], className)}>
      {userName && (
        <Text color='purple' size='lg'>
          {userName}
        </Text>
      )}
      <ul className={clsx(styles['drop-down-lists'])}>
        {linkList.map((link) => (
          <li key={link.id}>
            <TextLink
              link={link.path}
              size='sm'
              color='purple'
              className={clsx(styles['drop-down-textlink'])}
            >
              {link.name}
            </TextLink>
          </li>
        ))}
      </ul>
      {onLogout && <hr className={clsx(styles['drop-down-border'])} />}
      {onLogout && (
        <div className={clsx(styles['drop-down-button-wrapper'])}>
          <Button
            className={clsx(styles['drop-down-button'])}
            buttonStyle='white'
            onClick={onLogout}
          >
            <Icon
              iconName='userLogout'
              color='primary'
              size='small'
              className={clsx(styles['drop-down-icon'])}
            />
            ログアウト
          </Button>
        </div>
      )}
    </div>
  )
})

DropDown.displayName = 'DropDown'
DropDown.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
  onLogout: PropTypes.func,
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}
DropDown.defaultProps = {
  className: '',
  userName: '',
  onLogout: () => {},
  linkList: [],
}

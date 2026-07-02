import clsx from 'clsx'
import { memo, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCloseOnOutsideClick } from '@/hooks/useCloseOnOutsideClick'

import { useUserInfoMutators, useUserInfoState } from '@/stores/userInfoState'

import { Icon } from '@/components//atoms/Icon'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { DropDown } from '@/components/molecules/DropDown'

import styles from './index.module.css'

const linkList = [
  {
    id: 1,
    name: 'アカウント設定',
    path: '/user',
  },
]

export const TheHeader = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownAndButtonRef = useRef(null)
  const navigate = useNavigate()
  const { userInfo } = useUserInfoState()
  const { logout } = useUserInfoMutators()

  useCloseOnOutsideClick(dropdownAndButtonRef, () => {
    setIsOpen(false)
  })

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    logout().then(() => {
      navigate('/login', { replace: true })
    })
  }

  return (
    <header className={styles['the-header']}>
      <Text size='xl' bold>
        Gizumo Wiki
      </Text>
      <div ref={dropdownAndButtonRef}>
        <Button onClick={toggleDropdown} buttonStyle='icon-only'>
          <Icon
            iconName='userSettings'
            color='purple'
            size='large'
            className={clsx(styles['user-icon'])}
          />
        </Button>
        {isOpen && (
          <DropDown
            linkList={linkList}
            className={styles['drop-down-wrapper']}
            userName={userInfo.full_name}
            onLogout={handleLogout}
          />
        )}
      </div>
    </header>
  )
})
TheHeader.displayName = 'TheHeader'

import clsx from 'clsx'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'

import styles from './index.module.css'

export const PageBack = memo(() => {
  const navigate = useNavigate()

  return (
    <button className={clsx(styles['page-back'])} onClick={() => navigate(-1)}>
      <Icon iconName='previous' color='purple' size='large' />
      <Text className={clsx(styles.text)} color='purple' size='md'>
        もどる
      </Text>
    </button>
  )
})

PageBack.displayName = 'PageBack'

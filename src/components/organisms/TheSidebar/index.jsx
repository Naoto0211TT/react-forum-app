import { memo } from 'react'

import { NaviItem } from '@/components/molecules/NaviItem'

import styles from './index.module.css'
import { Text } from '../../atoms/Text/index'

const contentLists = [
  {
    id: 1,
    lineName: '記事',
    iconName: 'article',
    path: '/article',
  },
  {
    id: 2,
    lineName: 'カテゴリー',
    iconName: 'category',
    path: '/Category',
  },
]
const accountLists = [
  {
    id: 3,
    lineName: 'アカウント設定',
    iconName: 'userSettings',
    path: '/account',
  },
]

export const TheSidebar = memo(() => {
  return (
    <ul className={styles['the-sidebar']}>
      <li className={styles.wrap}>
        <Text size='sm' bold color='purple-dark'>
          コンテンツ
        </Text>
        <ul className={styles.nav}>
          {contentLists.map((list) => {
            return (
              <li className={styles.list} key={list.id}>
                <NaviItem
                  lineName={list.lineName}
                  iconName={list.iconName}
                  path={list.path}
                />
              </li>
            )
          })}
        </ul>
      </li>
      <li className={styles.wrap}>
        <Text size='sm' bold color='purple-dark'>
          ユーザー
        </Text>
        <ul className={styles.nav}>
          {accountLists.map((list) => {
            return (
              <li className={styles.list} key={list.id}>
                <NaviItem
                  lineName={list.lineName}
                  iconName={list.iconName}
                  path={list.path}
                />
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )
})

TheSidebar.displayName = 'TheSidebar'

import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { TheHeader } from '@/components/organisms/TheHeader'
import { TheSidebar } from '@/components/organisms/TheSidebar'

import styles from './index.module.css'

export const HeaderWithSidebar = memo(({ children, isAllowOverflowScroll }) => {
  return (
    <div className={styles.layout}>
      <TheHeader />
      <div className={styles.wrapper}>
        <TheSidebar />
        <main
          className={clsx(styles.main, {
            [styles['overflow-scroll']]: isAllowOverflowScroll,
          })}
        >
          {children}
        </main>
      </div>
    </div>
  )
})

HeaderWithSidebar.displayName = 'HeaderWithSidebar'
HeaderWithSidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  isAllowOverflowScroll: PropTypes.bool,
}
HeaderWithSidebar.defaultProps = {
  isAllowOverflowScroll: false,
}

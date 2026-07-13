import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { TextLink } from '@/components/atoms/TextLink'

import styles from './index.module.css'

export const DropDown = memo(({ linkList, className }) => {
  return (
    <div className={clsx(styles["drop-down"], className)}>
      <ul className={clsx(styles["drop-down-lists"])}>
        {linkList.map((link) => (
          <li key={link.id}>
            <TextLink
              link={link.path}
              size="sm"
              color="purple"
              className={clsx(styles["drop-down-textlink"])}
            >
              {link.name}
            </TextLink>
          </li>
        ))}
      </ul>
    </div>
  )
})

DropDown.displayName = 'DropDown'
DropDown.propTypes = {
  className: PropTypes.string,
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}
DropDown.defaultProps = {
  className: "",
  linkList: [],
}

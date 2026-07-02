import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { ButtonLink } from '@/components/atoms/ButtonLink'
import { Heading } from '@/components/atoms/Heading'

import styles from './index.module.css'

export const HeadingWithButtonLink = memo(
  ({ className, path, headingText, headingLevel, buttonLinkChildren }) => {
    return (
      <div className={clsx(styles['heading-with-button-link'], className)}>
        <Heading level={headingLevel}>{headingText}</Heading>
        <ButtonLink path={path}>{buttonLinkChildren}</ButtonLink>
      </div>
    )
  }
)

HeadingWithButtonLink.displayName = 'HeadingWithButtonLink'
HeadingWithButtonLink.propTypes = {
  className: PropTypes.string,
  headingText: PropTypes.string.isRequired,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  buttonLinkChildren: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
HeadingWithButtonLink.defaultProps = {
  className: '',
  headingLevel: 1,
}

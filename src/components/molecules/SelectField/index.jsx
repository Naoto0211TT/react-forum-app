import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { Select } from '@/components/atoms/Select'
import { Text } from '@/components/atoms/Text'

import styles from './index.module.css'

export const SelectField = memo(
  ({ className, errorText, label, value, onChange, placeholder, options }) => {
    return (
      <div className={clsx(styles['select-field'], className)}>
        <Text size='sm' bold color='purple-dark'>
          {label}
        </Text>
        <Select
          className={clsx(styles.select)}
          error={!!errorText}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
        />
        {errorText && (
          <Text size='xs' className={clsx(styles['error-text'])} color='error'>
            {errorText}
          </Text>
        )}
      </div>
    )
  }
)

SelectField.displayName = 'SelectField'

SelectField.propTypes = {
  className: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.string,
    })
  ).isRequired,
}

SelectField.defaultProps = {
  className: '',
  errorText: '',
  value: '',
  onChange: () => {},
  placeholder: '',
}

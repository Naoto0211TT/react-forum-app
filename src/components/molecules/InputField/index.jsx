import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'
import { Text } from '@/components/atoms/Text'

import styles from './index.module.css'

export const InputField = memo(
  ({
    className,
    errorText,
    label,
    htmlFor,
    value,
    onChange,
    placeholder,
    type,
  }) => {
    return (
      <div className={clsx(styles['input-field'], className)}>
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
          className={clsx(styles.input)}
          error={!!errorText}
          value={value}
          onChange={onChange}
          id={htmlFor}
          placeholder={placeholder}
          type={type}
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

InputField.displayName = 'InputField'

InputField.propTypes = {
  className: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url']),
}

InputField.defaultProps = {
  className: '',
  errorText: '',
  value: '',
  onChange: () => {},
  placeholder: '',
  type: 'text',
}

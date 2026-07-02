import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { Text } from '@/components/atoms/Text'
import { WysiWyg } from '@/components/atoms/WysiWyg'

import styles from './index.module.css'

export const WysiWygField = memo(
  ({
    className,
    label,
    toolbarItem,
    value,
    onChange,
    placeholder,
    errorText,
  }) => {
    return (
      <div className={className}>
        <Text size='sm' bold color='purple-dark'>
          {label}
        </Text>
        <WysiWyg
          className={clsx(styles.wysiwyg)}
          toolbarItem={toolbarItem}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={!!errorText}
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

WysiWygField.displayName = 'WysiWygField'
WysiWygField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  toolbarItem: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
}
WysiWygField.defaultProps = {
  className: '',
  toolbarItem: [[{ size: [] }], ['bold'], ['italic'], [{ list: 'bullet' }]],
  value: '',
  onChange: () => {},
  placeholder: '',
  errorText: '',
}

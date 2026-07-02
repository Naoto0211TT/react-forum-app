import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import BaseSelect from 'react-select'

export const Select = memo(
  ({ className, options, placeholder, value, onChange, error, ...props }) => {
    const styles = {
      menuList: (baseStyle) => ({
        ...baseStyle,
        fontSize: '12px',
      }),
      control: (baseStyle, { isFocused }) => ({
        ...baseStyle,
        // eslint-disable-next-line no-nested-ternary
        borderColor: error
          ? 'var(--color-border-danger)'
          : isFocused
          ? 'var(--color-primary)'
          : 'var(--color-border)',
        marginTop: '5px',
        minHeight: 'initial',
        maxHeight: '36px',
        fontSize: '12px',
        boxShadow: '1px 1px 4px rgb(0 0 0/ 20%)',
        padding: '0px 4px',
        cursor: 'text',
        transition: 'all 0.5s',
        ':hover': {
          // eslint-disable-next-line no-nested-ternary
          borderColor: error
            ? 'var(--color-border-danger)'
            : isFocused
            ? 'var(--color-primary)'
            : 'var(--color-border)',
        },
      }),
      input: (baseStyle) => ({
        ...baseStyle,
        margin: '0 0 2px 2px',
        padding: 0,
      }),
      placeholder: (baseStyle) => ({
        ...baseStyle,
        marginBottom: '2px',
      }),
      singleValue: (baseStyle) => ({
        ...baseStyle,
        marginBottom: '2px',
      }),
      indicatorsContainer: (baseStyle) => ({
        ...baseStyle,
        cursor: 'default',
      }),
      option: (baseStyle, { isFocused, isSelected }) => ({
        ...baseStyle,
        color: 'var(--color-text-main)',
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: isSelected
          ? 'var(--color-bg-purple)'
          : isFocused
          ? 'var(--color-bg-purple-light)'
          : undefined,
        ':active': {
          ...styles[':active'],
          backgroundColor: undefined,
        },
      }),
    }

    return (
      <BaseSelect
        {...props}
        styles={styles}
        className={clsx(className)}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        noOptionsMessage={() => '一致する結果はありません'}
      />
    )
  }
)

Select.displayName = 'Select'
Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.string,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
  error: PropTypes.bool,
}
Select.defaultProps = {
  className: '',
  placeholder: '',
  value: null,
  onChange: () => {},
  error: false,
}

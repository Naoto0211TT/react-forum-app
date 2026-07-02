import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

import styles from './index.module.css'

export const WysiWyg = memo(
  ({ toolbarItem, value, onChange, className, error, placeholder }) => {
    return (
      <ReactQuill
        className={clsx(styles.wysiwyg, className, {
          [styles['wysiwyg--error']]: error,
        })}
        placeholder={placeholder}
        modules={{ toolbar: toolbarItem }}
        theme='snow'
        value={value}
        onChange={(val) => onChange(val === '<p><br></p>' ? '' : val)}
      />
    )
  }
)

WysiWyg.displayName = 'WysiWyg'
WysiWyg.propTypes = {
  toolbarItem: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
}
WysiWyg.defaultProps = {
  toolbarItem: [],
  className: '',
  error: false,
  value: '',
  onChange: () => {},
  placeholder: '',
}

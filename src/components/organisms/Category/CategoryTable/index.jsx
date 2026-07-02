import PropTypes from 'prop-types'
import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'

import tableStyles from '@/styles/table.module.css'

import styles from './index.module.css'

const columns = [
  { id: 1, header: 'カテゴリー名', size: 'sm' },
  { id: 2, header: '記事一覧', size: 'auto' },
  { id: 3, header: '', size: 'auto' },
]

export const CategoryTable = memo(({ rows, onDeleteIconClick }) => {
  const navigate = useNavigate()

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className={styles[`size--${column.size}`]}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} onClick={() => navigate(`/category/${row.id}`)}>
            <td>
              <Link
                to={`/article?category=${encodeURIComponent(row.name)}`}
                onClick={(e) => e.stopPropagation()}
              >
                {row.name}
              </Link>
            </td>
            <td>
              <Link
                to={`/article?category=${encodeURIComponent(row.name)}`} // 名前を文字列として(&とか)
                onClick={(e) => e.stopPropagation()} // 行クリック防止
              >
                {row.name}の記事一覧
              </Link>
            </td>
            <td className={styles['align-right']}>
              <Button
                buttonStyle='icon-only'
                onClick={(event) => {
                  event.stopPropagation()
                  onDeleteIconClick(row.id, row.name)
                }}
              >
                <Icon iconName='trash' />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})

CategoryTable.displayName = 'CategoryTable'

CategoryTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onDeleteIconClick: PropTypes.func.isRequired,
}

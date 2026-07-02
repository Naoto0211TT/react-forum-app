import PropTypes from 'prop-types'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'

import tableStyles from '@/styles/table.module.css'

import styles from './index.module.css'

const columns = [
  { id: 1, header: 'タイトル', size: 'sm' },
  { id: 2, header: '本文', size: 'md' },
  { id: 3, header: 'カテゴリー', size: 'auto' },
  { id: 4, header: '', size: 'auto' },
]

export const ArticleTable = memo(({ rows, onDeleteIconClick }) => {
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
          <tr key={row.id} onClick={() => navigate(`/article/${row.id}`)}>
            <td>{row.title}</td>
            <td>{row.content}</td>
            <td>{row.categoryName}</td>
            <td className={styles['align-right']}>
              <Button
                buttonStyle='icon-only'
                onClick={(event) => {
                  event.stopPropagation()
                  onDeleteIconClick(row.id, row.title)
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

ArticleTable.displayName = 'ArticleTable'
ArticleTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      categoryName: PropTypes.string,
    })
  ).isRequired,
  onDeleteIconClick: PropTypes.func.isRequired,
}

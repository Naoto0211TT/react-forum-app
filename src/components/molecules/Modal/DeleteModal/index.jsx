import clsx from 'clsx'
import PropTypes from 'prop-types'
import { memo } from 'react'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { ModalMask } from '@/components/molecules/Modal/ModalMask'

import styles from './index.module.css'

export const DeleteModal = memo(
  ({
    className,
    modalIsOpen,
    onRequestClose,
    onDeleteButtonClick,
    deleteInfo,
    modalName,
  }) => {
    return (
      <ModalMask modalIsOpen={modalIsOpen} onRequestClose={onRequestClose}>
        <div className={clsx(styles['delete-modal'], className)}>
          <Heading level={2} className={styles.heading}>
            {`${modalName}の削除`}
          </Heading>
          <div className={styles.content}>
            <div className={styles['text-area']}>
              <p>「{deleteInfo.name}」を削除しますか？</p>
              <p>削除した{modalName}は復元できません。</p>
            </div>
            <div className={styles['button-area']}>
              <Button onClick={onRequestClose} buttonStyle='white'>
                キャンセル
              </Button>
              <Button onClick={onDeleteButtonClick} buttonStyle='danger'>
                削除
              </Button>
            </div>
          </div>
        </div>
      </ModalMask>
    )
  }
)

DeleteModal.displayName = 'DeleteModal'
DeleteModal.propTypes = {
  className: PropTypes.string,
  modalIsOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  deleteInfo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  modalName: PropTypes.string.isRequired,
}
DeleteModal.defaultProps = {
  className: '',
}

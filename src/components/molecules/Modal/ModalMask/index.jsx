import PropTypes from 'prop-types'
import { memo } from 'react'
import Modal from 'react-modal'

import styles from './index.module.css'

export const ModalMask = memo(({ modalIsOpen, onRequestClose, children }) => {
  Modal.setAppElement(document.getElementById('root'))

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      shouldReturnFocusAfterClose
      className={styles.modal}
      overlayClassName={{
        base: styles['modal-mask'],
        afterOpen: styles['modal-mask--after-open'],
        beforeClose: styles['modal-mask--before-close'],
      }}
    >
      {children}
    </Modal>
  )
})

ModalMask.displayName = 'ModalMask'
ModalMask.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

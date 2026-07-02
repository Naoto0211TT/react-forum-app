import { useModal } from '@/stores/modalState'

import { DeleteModal } from '.'

export default {
  title: 'molecules/DeleteModal',
  component: DeleteModal,
  decorators: [
    (Story) => (
      <div id='root'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['modalIsOpen', 'onRequestClose'],
    },
  },
}

const Template = ({ className, deleteInfo, modalName }) => {
  const { useModalState, useModalMutators } = useModal('delete')
  const { modalIsOpen } = useModalState()
  const { openModal, closeModal } = useModalMutators()

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <DeleteModal
        className={className}
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        onDeleteButtonClick={closeModal}
        deleteInfo={deleteInfo}
        modalName={modalName}
      />
    </>
  )
}

Template.propTypes = {
  ...DeleteModal.propTypes,
}

export const Default = {
  render: (args) => <Template {...args} />,
  args: {
    modalIsOpen: false,
    onRequestClose: () => {},
    deleteInfo: { id: 0, name: 'ダミーコンテンツ' },
    modalName: 'コンテンツ',
  },
}

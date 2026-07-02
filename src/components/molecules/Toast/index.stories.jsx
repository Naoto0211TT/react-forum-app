import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useNotification } from '@/hooks/useNotification'

const Toast = ({ toastType, message }) => {
  const { success, error, info, warning } = useNotification()

  const toastStyle = {
    success,
    error,
    info,
    warning,
  }

  return (
    <div>
      <button onClick={() => toastStyle[toastType](message)}>Click me</button>
      <ToastContainer
        style={{
          '--toastify-toast-min-height': '10px',
        }}
      />
    </div>
  )
}

Toast.displayName = 'Toast'
Toast.propTypes = {
  toastType: PropTypes.oneOf(['success', 'error', 'info', 'warning'])
    .isRequired,
  message: PropTypes.string.isRequired,
}

export default {
  title: 'molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'トーストコンポーネント。useNotificationフックを使用してトーストを表示する。',
      },
      source: {
        language: 'jsx',
        code: `
          import { useNotification } from '@/hooks/useNotification'

const { error } = useNotification()

error('メールアドレスまたはパスワードが間違っています。')
        `,
      },
    },
  },
  argTypes: {
    toastType: {
      description: 'トーストの種類',
      control: 'radio',
      options: ['success', 'error', 'info', 'warning'],
      type: { required: true, summary: 'success | error | info | warning' },
    },
    message: {
      description: 'トーストのメッセージ',
      control: 'text',
      type: { summary: 'string' },
    },
  },
}

export const Success = {
  args: {
    toastType: 'success',
    message: 'success',
  },
}

export const Error = {
  args: {
    toastType: 'error',
    message: 'error',
  },
}

export const Info = {
  args: {
    toastType: 'info',
    message: 'information',
  },
}

export const Warning = {
  args: {
    toastType: 'warning',
    message: 'warning',
  },
}

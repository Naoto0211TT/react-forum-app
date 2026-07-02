import { Link, useLocation } from 'react-router-dom'

import { PageBack } from '.'

export default {
  title: 'molecules/PageBack',
  component: PageBack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ページバックコンポーネント。クリックすると前のページに戻る。',
      },
    },
  },
}

export const Default = {
  args: {},
}

const PathStateComponent = () => {
  const location = useLocation()
  return (
    <div>
      <PageBack />
      <div style={{ fontSize: '.8rem', marginTop: 10 }}>
        <p>現在のパス：{location.pathname}</p>
        <p>
          次のパス：<Link to={{ pathname: 'path-to-next' }}>すすむ</Link>
        </p>
      </div>
    </div>
  )
}

export const PathState = {
  render: () => <PathStateComponent />,
  parameters: {
    reactRouter: {
      routePath: '/',
      outlet: {
        element: <PathStateComponent />,
        path: 'path-to-next',
      },
    },
  },
}

import { useState } from 'react'

import { Input } from '.'

export default {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '入力コンポーネント',
      },
    },
  },
  argTypes: {
    type: { description: '入力タイプ' },
    error: {
      control: 'boolean',
      type: { summary: 'boolean' },
      description: 'バリデーションエラーの有無',
      table: { defaultValue: { summary: false } },
    },
    className: { description: '入力のクラス名' },
    value: { description: '入力の値' },
    onChange: { description: '入力の値変更時のイベント' },
  },
  args: {
    type: 'text',
    error: false,
  },
}

// inputタグ内で入力を可能とするコンポーネントの実装（汎用の実装では直接入力できないため）
const StoryComponent = ({ className, error, type }) => {
  const [value, setValue] = useState('')
  return (
    <Input
      className={className}
      placeholder='入力してください'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={error}
      type={type}
    />
  )
}

StoryComponent.propTypes = {
  ...Input.propTypes,
}

export const Default = {
  args: {},
  render: (args) => <StoryComponent {...args} />,
}

export const Error = {
  args: {
    error: true,
  },
  render: (args) => <StoryComponent {...args} />,
}

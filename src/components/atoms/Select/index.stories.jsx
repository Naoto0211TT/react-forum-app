import { useState } from 'react'

import { Select } from '.'

export default {
  title: 'atoms/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: { description: 'コンポーネントのクラス名' },
    options: { description: 'セレクト項目' },
    placeholder: { description: 'プレースホルダーテキスト' },
    value: { description: '入力の値' },
    onChange: { description: '入力値変更時のイベント' },
    error: { description: 'バリデーションエラーの有無' },
  },
  args: {
    options: [
      { value: 'ダミーカテゴリーA', label: 'ダミーカテゴリーA' },
      { value: 'ダミーカテゴリーB', label: 'ダミーカテゴリーB' },
      { value: 'ダミーカテゴリーC', label: 'ダミーカテゴリーC' },
    ],
  },
}

const StoryComponent = ({ className, options, error }) => {
  const [value, setValue] = useState(null)
  return (
    <Select
      className={className}
      options={options}
      placeholder='選択してください'
      value={value}
      onChange={(selectedValue) => setValue(selectedValue)}
      error={error}
    />
  )
}

StoryComponent.propTypes = {
  ...Select.propTypes,
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

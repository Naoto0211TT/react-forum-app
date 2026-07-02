import { useState } from 'react'

import { SelectField } from '.'

export default {
  title: 'molecules/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'セレクトフィールドコンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: 'コンポーネントのクラス名' },
    errorText: { description: 'バリデーションエラーのテキスト' },
    label: { description: 'ラベルテキスト' },
    placeholder: { description: 'プレースホルダーテキスト' },
    value: { description: '入力の値' },
    onChange: { description: '入力値変更時のイベント' },
    options: { description: 'セレクト項目' },
  },
  args: {
    options: [
      { value: 'ダミーカテゴリーA', label: 'ダミーカテゴリーA' },
      { value: 'ダミーカテゴリーB', label: 'ダミーカテゴリーB' },
      { value: 'ダミーカテゴリーC', label: 'ダミーカテゴリーC' },
    ],
  },
}

const Template = ({ className, errorText, label, options }) => {
  const [value, setValue] = useState(null)
  return (
    <SelectField
      className={className}
      errorText={errorText}
      label={label}
      options={options}
      placeholder='選択してください'
      value={value}
      onChange={(selectedValue) => setValue(selectedValue)}
    />
  )
}

Template.propTypes = {
  ...SelectField.propTypes,
}

export const Default = {
  args: {
    label: 'ラベルテキスト',
  },
  render: (args) => <Template {...args} />,
}

export const Error = {
  args: {
    label: 'ラベルテキスト',
    errorText: 'エラーテキスト',
  },
  render: (args) => <Template {...args} />,
}

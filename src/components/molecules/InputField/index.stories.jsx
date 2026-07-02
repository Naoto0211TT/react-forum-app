import { useState } from 'react'

import { InputField } from '.'

export default {
  title: 'molecules/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '入力フィールドコンポーネント',
      },
    },
  },
  argTypes: {
    className: { description: 'コンポーネントのクラス名' },
    errorText: { description: 'バリデーションエラーのテキスト' },
    htmlFor: { description: 'ラベルのfor属性' },
    label: { description: 'ラベルテキスト' },
    placeholder: { description: 'プレースホルダーテキスト' },
    type: { description: '入力タイプ' },
    value: { description: '入力の値' },
    onChange: { description: '入力値変更時のイベント' },
  },
  args: {
    type: 'text',
    placeholder: '入力してください',
  },
}

// inputタグ内で入力を可能とする実装（汎用の実装では直接入力できないため）
const StoryComponent = ({
  className,
  errorText,
  htmlFor,
  label,
  placeholder,
  type,
}) => {
  const [value, setValue] = useState('')
  return (
    <InputField
      className={className}
      errorText={errorText}
      label={label}
      htmlFor={htmlFor}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  )
}

StoryComponent.propTypes = {
  ...InputField.propTypes,
}

export const Default = {
  args: {
    htmlFor: 'html-for',
    label: 'ラベルテキスト',
  },
  render: (args) => <StoryComponent {...args} />,
}

export const Error = {
  args: {
    htmlFor: 'html-for',
    label: 'ラベルテキスト',
    errorText: 'エラーテキスト',
  },
  render: (args) => <StoryComponent {...args} />,
}

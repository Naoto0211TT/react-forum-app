import { useState } from 'react'

import { WysiWygField } from '.'

export default {
  title: 'molecules/WysiWygField',
  component: WysiWygField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ウィジウィグフィールドコンポーネント',
      },
    },
  },
  args: {
    label: 'ラベルテキスト',
    toolbarItem: [[{ size: [] }], ['bold'], ['italic'], [{ list: 'bullet' }]],
    placeholder: '入力してください',
  },
  argTypes: {
    className: { description: 'コンポーネントのクラス名' },
    label: { description: 'ラベルテキスト' },
    toolbarItem: { description: 'Wysiwygのツールバーアイテム' },
    value: { description: '入力の値' },
    onChange: { description: '入力値変更時のイベント' },
    placeholder: { description: 'プレースホルダーテキスト' },
    errorText: { description: 'バリデーションエラーのテキスト' },
  },
}

const Template = ({
  className,
  label,
  toolbarItem,
  placeholder,
  errorText,
}) => {
  const [value, setValue] = useState('')

  return (
    <WysiWygField
      className={className}
      label={label}
      toolbarItem={toolbarItem}
      value={value}
      onChange={(val) => setValue(val)}
      placeholder={placeholder}
      errorText={errorText}
    />
  )
}

Template.propTypes = {
  ...WysiWygField.propTypes,
}

export const Default = {
  args: {},
  render: (args) => <Template {...args} />,
}

export const Error = {
  args: {
    errorText: 'エラーテキスト',
  },
  render: (args) => <Template {...args} />,
}

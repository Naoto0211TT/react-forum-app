import { WysiWyg } from '.'

export default {
  title: 'atoms/WysiWyg',
  component: WysiWyg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ウィジウィグコンポーネント',
      },
    },
  },
  args: {
    toolbarItem: [[{ size: [] }], ['bold'], ['italic'], [{ list: 'bullet' }]],
    error: false,
    placeholder: '入力してください',
  },
  argTypes: {
    toolbarItem: { description: 'Wysiwygのツールバーアイテム' },
    error: {
      control: 'boolean',
      type: { summary: 'boolean' },
      description: 'バリデーションエラーの有無',
      table: { defaultValue: { summary: false } },
    },
    className: { description: 'コンポーネントのクラス名' },
    value: { description: '入力の値' },
    onChange: { description: '入力の値変更時のイベント' },
    placeholder: { description: 'プレースホルダーテキスト' },
  },
}

export const Default = {
  args: {},
}

export const Error = {
  args: {
    error: true,
  },
}

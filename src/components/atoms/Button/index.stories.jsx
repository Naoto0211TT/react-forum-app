import { Icon } from '@/components/atoms/Icon'

import { Button } from '.'

export default {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ボタンコンポーネント',
      },
    },
  },
  argTypes: {
    type: { description: 'ボタンのタイプ' },
    disabled: {
      control: 'boolean',
      type: { summary: 'boolean' },
      description: 'ボタンの有効/無効',
      table: { defaultValue: { summary: false } },
    },
    children: { description: 'ボタンのラベル' },
    buttonStyle: { description: 'ボタンのスタイル' },
    className: { description: 'ボタンのクラス名' },
  },
  args: {
    type: 'button',
    disabled: false,
  },
}

export const Primary = {
  args: {
    children: '＋ 追加',
    buttonStyle: 'primary',
  },
}
export const Secondary = {
  args: {
    children: '作成',
    buttonStyle: 'secondary',
  },
}

export const Disable = {
  args: {
    children: '作成中',
    disabled: true,
  },
}

export const Danger = {
  args: {
    children: '削除',
    buttonStyle: 'danger',
  },
}

export const White = {
  args: {
    children: 'キャンセル',
    buttonStyle: 'white',
  },
}

export const IconOnly = {
  args: {
    children: <Icon iconName='userSettings' color='purple' size='large' />,
    buttonStyle: 'icon-only',
  },
}

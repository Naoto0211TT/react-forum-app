import { Icon } from '.'

export default {
  title: 'atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'アイコンコンポーネント',
      },
    },
  },
  argTypes: {
    iconName: { description: 'アイコン名' },
    color: { description: 'アイコンカラー' },
    size: { description: 'アイコンサイズ' },
    className: { description: 'アイコンのクラス名' },
  },
}

export const Article = {
  args: {
    iconName: 'article',
    color: 'purple',
    size: 'small',
  },
}

export const Category = {
  args: {
    iconName: 'category',
    color: 'purple',
    size: 'small',
  },
}

export const Trash = {
  args: {
    iconName: 'trash',
    size: 'large',
  },
}

export const UserSettings = {
  args: {
    iconName: 'userSettings',
    color: 'purple',
    size: 'small',
  },
}

export const StatusGood = {
  args: {
    iconName: 'statusGood',
    color: 'success',
    size: 'medium',
  },
}

export const CircleAlert = {
  args: {
    iconName: 'circleAlert',
    color: 'danger',
    size: 'medium',
  },
}

export const Alert = {
  args: {
    iconName: 'alert',
    color: 'warning',
    size: 'medium',
  },
}

export const StatusInfo = {
  args: {
    iconName: 'statusInfo',
    color: 'information',
    size: 'medium',
  },
}

export const Previous = {
  args: {
    iconName: 'previous',
    color: 'primary',
    size: 'medium',
  },
}

export const UserLogout = {
  args: {
    iconName: 'userLogout',
    color: 'primary',
    size: 'small',
  },
}

import { DropDown } from '.'

export default {
  title: 'molecules/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  args: {
    isOpen: true,
  },
  argTypes: {},
}

export const Login = {
  args: {
    userName: 'Gizumo Taro',
    linkList: [
      {
        id: 1,
        name: 'アカウント設定',
        path: '/user',
      },
    ],
  },
}

export const Logout = {
  args: {
    userName: 'Gizumo Taro',
    linkList: [
      {
        id: 1,
        name: 'アカウント設定',
        path: '/user',
      },
    ],
  },
}

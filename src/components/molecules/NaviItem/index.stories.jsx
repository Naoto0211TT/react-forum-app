import { NaviItem } from '.'

export default {
  title: 'molecules/NaviItem',
  component: NaviItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'ナビゲーションの項目コンポーネント',
      },
    },
  },
  argTypes: {
    lineName: { description: 'ナビゲーション項目のテキスト' },
    iconName: { description: 'ナビゲーション項目のアイコン名' },
    path: { description: '遷移先のパス' },
    textSize: { description: 'ナビゲーション項目のテキストサイズ' },
  },
}

export const Article = {
  args: {
    lineName: '記事',
    iconName: 'article',
    path: '/article',
  },
}

export const Category = {
  args: {
    lineName: 'カテゴリー',
    iconName: 'category',
    path: '/category',
  },
}

export const Account = {
  args: {
    lineName: 'アカウント設定',
    iconName: 'userSettings',
    path: '/account',
  },
}

export const IsActive = {
  args: {
    lineName: '記事',
    path: '/article',
    iconName: 'article',
  },
  parameters: {
    reactRouter: {
      routePath: '/article',
    },
  },
}

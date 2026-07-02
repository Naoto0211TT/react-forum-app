import { createBrowserRouter } from 'react-router-dom'

import { Article } from '@/components/pages/Article'
import { Create as ArticleCreate } from '@/components/pages/Article/Create'
import { Edit as ArticleEdit } from '@/components/pages/Article/Edit'
import { List as ArticleList } from '@/components/pages/Article/List'
import { Category } from '@/components/pages/Category'
import { Create as CategoryCreate } from '@/components/pages/Category/Create'
import { Edit as CategoryEdit } from '@/components/pages/Category/Edit'
import { List as CategoryList } from '@/components/pages/Category/List'
import { Home } from '@/components/pages/Home'
import { Login } from '@/components/pages/Login'

export const router = (checkLogin) => {
  return createBrowserRouter([
    { path: '/', element: <Home />, loader: () => checkLogin() },
    {
      path: '/category',
      element: <Category />,
      loader: () => checkLogin(),
      children: [
        { index: true, element: <CategoryList /> },
        {
          path: 'create',
          element: <CategoryCreate />,
        },
        {
          path: ':id',
          element: <CategoryEdit />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      loader: ({ request }) => {
        const currentPath = request.url.split(/(?=\/)/g).slice(-1)[0]
        return checkLogin('/category', currentPath)
      },
    },
    {
      path: '/article',
      element: <Article />,
      loader: () => checkLogin(),
      children: [
        { index: true, element: <ArticleList /> },
        {
          path: 'create',
          element: <ArticleCreate />,
        },
        {
          path: ':id',
          element: <ArticleEdit />,
        },
      ],
    },
  ])
}

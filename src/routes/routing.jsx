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

export const router = () => {
  return createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/category',
      element: <Category />,
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
      path: '/article',
      element: <Article />,
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

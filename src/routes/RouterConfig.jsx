import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes/routing'

export const RouterConfig = () => {
  return <RouterProvider router={router()} />
}

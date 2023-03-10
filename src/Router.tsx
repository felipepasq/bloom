import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import BooksPage from './pages/BooksPage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: 'category/:bookCategory', element: <BooksPage /> }
])

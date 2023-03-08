import GlobalStyle from './styles/global'

import { ThemeProvider } from 'styled-components'
import { api } from './services/api'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { router } from './Router'

function App() {
  const fetchData = async () => {
    const response = await api.getAllBooks()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

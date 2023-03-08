import GlobalStyle from './styles/global'
import Pagination from './components/Pagination'
import { ThemeProvider } from 'styled-components'
import { api } from './services/api'
import { defaultTheme } from './styles/themes/default'
import { useEffect } from 'react'

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
    </ThemeProvider>
  )
}

export default App

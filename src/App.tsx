import GlobalStyle from './styles/global'
import Pagination from './components/Pagination'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Pagination totalPages={6} />
      </ThemeProvider>
    </div>
  )
}

export default App

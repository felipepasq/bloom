import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

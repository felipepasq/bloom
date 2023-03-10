import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { SearchContextProvider } from './context/SearchContext'
import { router } from './Router'
import { ViewContextProvider } from './context/ViewContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ViewContextProvider>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
      </ViewContextProvider>
    </ThemeProvider>
  )
}

export default App

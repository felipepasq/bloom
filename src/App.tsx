import GlobalStyle from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <div>
      <GlobalStyle theme={defaultTheme} />
      <h1>Hello world</h1>
    </div>
  )
}

export default App

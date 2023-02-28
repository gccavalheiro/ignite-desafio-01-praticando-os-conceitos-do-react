import { Provider as ToastProvider } from '@radix-ui/react-toast'

import { Screen } from './Screen'
import { globalStyles } from './styles/global'

function App() {
  globalStyles()

  return (
    <ToastProvider swipeDirection="right">
      <Screen />
    </ToastProvider>
  )
}

export default App

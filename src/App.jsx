import './App.css'
import MainPage from './components/MainPage/MainPage'
import { ContextProvider } from './context/context'

function App() {
	return (
		<ContextProvider>
      <MainPage />
		</ContextProvider>
	)
}

export default App

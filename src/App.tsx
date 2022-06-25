import './App.css'
import { Navigation } from './router/Navigation'

function App() {

  return (
    <div className="h-screen sm:bg-gray-50 flex items-center sm:pt-10 bg-primary-100 selection:bg-secondary-100 selection:text-text-100">
     <Navigation />
    </div>
  )
}

export default App

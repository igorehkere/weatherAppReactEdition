import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReactLogo from './components/ReactLogo'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather/>
      <ReactLogo/>
    </>
  )
}

export default App

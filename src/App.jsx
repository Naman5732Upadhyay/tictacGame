import { useState } from 'react'
import './App.css'
import TicTac from './components/TicTacTo/TicTac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTac/>
    </>
  )
}

export default App

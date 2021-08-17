import React from 'react'
import { useGlobalContext } from './context'
import './index.css'
import Navbar from './components/Navbar'
function App() {
  const data = useGlobalContext()
  return (
    <>
      <Navbar />
    </>
  )
}

export default App

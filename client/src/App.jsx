import { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Footer/>
    </>
  )
}

export default App

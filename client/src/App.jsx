import { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import BlogSection from './sections/BlogIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <BlogSection />
      <Footer/>
    </>
  )
}

export default App

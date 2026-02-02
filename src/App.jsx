import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Hero from './components/Hero'
import Services from './components/Services'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Navbar/>
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Contact/>
    </Container>
    </>
  )
}

export default App

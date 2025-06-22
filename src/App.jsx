import { useState } from 'react'


import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Skill from './components/Skill'
import Projects from './components/Projects'
import About from './components/About'
import ParticlesBackground from './components/ParticlesBackground'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
      <div className='relative z-0 bg-black min-h-screen'>
      <ParticlesBackground/>
        <div className='relative z-10'>
          <Header/>
          <About/>
          <Skill/>
          <Projects/>
          <Education/>
        </div>
        
        
      </div>
      </BrowserRouter>
    
  )
}

export default App

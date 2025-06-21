import { useState } from 'react'


import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
      <div className='relative z-0 bg-black min-h-screen'>
        <div className='bg-no-repeat bg-cover bg-center'>
        <Header/>
        <Hero/>
        
        </div>
        <Skill/>
        <Projects/>
      </div>
      </BrowserRouter>
    
  )
}

export default App

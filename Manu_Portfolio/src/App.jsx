import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<About />  
<Education /> 
<Projects />
<Contact />

    
    </>
  )
}

export default App

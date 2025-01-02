

import './App.css'
import Banner from './Banner'
import Contact from './Contact'
import Education from './Education'
import Navbar from './Navbar'

import Projects from './Projects'
import Skills from './Skills'

function App() {
  
  return (
    <>
     <Navbar></Navbar>
    <Banner id="home"></Banner>
    
    <Projects></Projects>
    <Skills></Skills>
    <Education></Education>
    <Contact></Contact>

      
    </>
  )
}

export default App

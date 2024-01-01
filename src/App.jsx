import React from 'react'
import Home from './Components/Home'
import Skills from './Components/Skills'
import './App.css'
import Project from './Components/Project'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffefba] to-[#ffffff] ... h-full" >
      <Home />
      <Skills />
      <Project />
      <Contact/>
    </div>
  );
}

export default App

import React from 'react';
import './App.css';
import  Home from './Components/Home';
import  Education from './Components/Education';
import  Skills from './Components/Skills';
import  Services from './Components/Services';
import  Projects from './Components/Projects';
import Contact from './Components/contact';
import Hire from './Components/Hire';
import Blog from './Components/Blog';
function App() {
  return (
    <div>
  
      <Home />
      <Projects/>
      <Education/>
      <Services/>
      <Hire/>
      <Skills/>
      <Blog/>
      <Contact/>

     
    </div>
  );
}

export default App;

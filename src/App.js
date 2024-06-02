import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

const App = () => (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/contact" element={<Contact/>} />
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/certifications" element={<Certifications/>}/>
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  </BrowserRouter>
)


export default App;




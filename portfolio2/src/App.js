import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import DotUnderline from './images/DottedLine.js';
import NsLogo from './images/NS-trans-1.png'

import About from './components/About.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Skills from './components/skills/SkillsSection.js'
import Cert from './components/certificates/Certificate.js'
import Footer from './components/footer/Footer.js'
import Contact from './components/contact/Contact.js'
import Experiences from './components/Experience.js';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  let appContainer = 'app-container'
  let isSecondaryColor = path == '/projects' || path == '/experience';
  if(path == '/experience') appContainer += ' experience-container'
  if(path == '/projects') appContainer += ' projects-container'

  function setPage(newPath){
    window.scrollTo(0, 0)
    setPath(newPath)
  }

  return (
    <Router>
      <div className={appContainer}>
        <nav className={`navbar${isSecondaryColor? ' second-navbar':''}`}>
          
          <div className="container"><img className="logo-img" src={NsLogo} />
            <ul>
              <li className="nav-li">
                <Link onClick={()=> setPage('/')} to="/" className={path == '/'?'nav-link active':'nav-link'} >Intro<span>Intro</span></Link>
                <div className={path == '/'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              
              <li className="nav-li">
                <Link onClick={()=> setPage('/projects')} to="/projects" className={path == '/projects'?'nav-link active':'nav-link'} >Projects<span>Projects</span></Link>
                <div className={path == '/projects'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPage('/skills')} to="/skills" className={path == '/skills'?'nav-link active':'nav-link'} >Skills<span>Skills</span></Link>
                <div className={path == '/skills'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPage('/experience')} to="/experience" className={path == '/experience'?'nav-link active':'nav-link'} >Experience<span>Experience</span></Link>
                <div className={path == '/experience'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
            </ul>
            <Link onClick={()=> setPage('/contact')} to="/contact" className="nav-contact">Contact Me<span className="nav-contact-overlay"></span></Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects"  element={ <Projects  />}  />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/skills" element={<div className="content-container"><Skills /><Cert /></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
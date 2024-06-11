import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import DotUnderline from './images/DottedLine.js';
import NsLogo from './images/NS-trans-1.png'

import About from './components/About.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'

// // Home component
// const Home = () => (
//   <div className="content-container">
//     <h2>Home</h2>
//     <p>Welcome to the Home page!</p>
//   </div>
// );

// // About component
// const About = () => (
//   <div className="content-container">
//     <h2>About</h2>
//     <p>This is the About page.</p>
//   </div>
// );

function App() {
  const [path, setPath] = useState(window.location.pathname);
  let appContainer = 'app-container'
  if(path == '/experience') appContainer += ' experience-container'
  if(path == '/projects') appContainer += ' projects-container'

  return (
    <Router>
      <div className={appContainer}>
        <nav className="navbar">
          
          <div className="container"><img className="logo-img" src={NsLogo} />
            <ul>
              <li className="nav-li">
                <Link onClick={()=> setPath('/')} to="/" className={path == '/'?'nav-link active':'nav-link'} >Intro<span>Intro</span></Link>
                <div className={path == '/'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              
              <li className="nav-li">
                <Link onClick={()=> setPath('/projects')} to="/projects" className={path == '/projects'?'nav-link active':'nav-link'} >Projects<span>Projects</span></Link>
                <div className={path == '/projects'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPath('/skills')} to="/skills" className={path == '/skills'?'nav-link active':'nav-link'} >Skills<span>Skills</span></Link>
                <div className={path == '/skills'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPath('/experience')} to="/experience" className={path == '/experience'?'nav-link active':'nav-link'} >Experience<span>Experience</span></Link>
                <div className={path == '/experience'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPath('/about')} to="/about" className={path == '/about'?'nav-link active':'nav-link'} >About<span>About</span></Link>
                <div className={path == '/about'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
            </ul>
            <button className="nav-contact">Contact Me<span className="nav-contact-overlay"></span></button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects"  render={props => <Projects {...props} />}  /> */}
          <Route path="/projects"  element={ <Projects  />}  />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
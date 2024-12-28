import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();

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
  const [openNav, setNav] = useState(false);
  let appContainer = 'app-container'
  let isSecondaryColor = path == '/projects' || path == '/experience';
  if(path == '/experience') appContainer += ' experience-container'
  if(path == '/projects') appContainer += ' projects-container'

  function setPage(newPath){
    if(openNav)  setNav(!openNav)
    window.scrollTo(0, 0)
    setPath(newPath)
  }

  function menuOpen(){
    console.log(this)
    // document.getElementById("nav-icon3").classList.toggle("open")
    setNav(!openNav)
  }
  const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      console.log('run AOS init')
      AOS.init();
      let navlist  = document.querySelector('.nav-list');
      console.log(navlist)
        const handleScroll = (e) => {
          let svg = document.querySelectorAll('#homeSplitOne')[1]
          document.querySelectorAll('#homeSplitOne').forEach( (ele, i) => {
            let offset = getOffset(ele).top - ele.scrollHeight - 0
            
            if(!Array.from(ele.classList).includes('footer-wave')){
              if(window.scrollY > offset){
                let difference = window.scrollY - offset
                let percentGrow = Math.min(difference/15, 25)
                console.log(percentGrow)

                ele.style.transform = ` scaleY(1.${percentGrow})`
              }else{
                ele.style.removeProperty('transform')
              }
            }
            
          })
          setScrollPosition(window.pageYOffset);

        };
        function getOffset(el) {
          const rect = el.getBoundingClientRect();
          return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
          };
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
      // isSecondaryColor = false
  return (
    <Router>
      <div id="SaveScreen"><span className="spinner"></span></div>
      <div id="SentScreen"><span>Message Sent</span></div>
      <div className={appContainer}>
        <nav className={`navbar${isSecondaryColor? ' second-navbar':''}`}>
          
          <div className="container"><img className="logo-img" src={NsLogo}  data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="1000"/>
            <ul className={`nav-list${openNav? ' list-open':''}${isSecondaryColor? ' gray-list':''}`} >
              <li className="nav-li">
                <Link onClick={()=> setPage('/')} to="/" className={path == '/'?'nav-link active':'nav-link'} >Intro<span>Home</span></Link>
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
            <div className='nav-right' data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="1000">
              <Link onClick={()=> setPage('/contact')} to="/contact" className="nav-contact">Contact Me<span className="nav-contact-overlay"></span></Link>
              <div class="nav-mobile-btn">
                <div id="nav-icon3" onClick={menuOpen} className={openNav? 'open':''}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            
            
            </div>
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
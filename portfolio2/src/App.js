import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
// import { rainbowCursor } from "cursor-effects";
// new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });

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
import Services from './components/services/Services.js';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [openNav, setNav] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [carosel, setCarosel] = useState(0);
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
      curosrStart()
      setTimeout(()=>setAnimate(true),1000);
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
        setTimeout(function(){animationLoop()}, 5000)
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function animationLoop(){
      return
      if(document.querySelector('.home-main-image').classList.contains('main-image-fadeout')){
        let image1 = document.querySelector('.home-main-image')
        let image2 = document.querySelector('.home-main-image-2')
        document.querySelector('.home-main-image').classList.add("main-image-fadein");
        // image1.classList.remove(".main-image-fadeout");
        // image2.classList.add("main-image-fadeout");
        image2.classList.remove(".main-image-fadein");
      }else{
        let image1 = document.querySelector('.home-main-image')
        let image2 = document.querySelector('.home-main-image-2')
        // image1.classList.add("main-image-fadeout");
        image1.classList.remove(".main-image-fadein");
        image2.classList.add("main-image-fadein");
        // image2.classList.remove(".main-image-fadeout");
      }
      function fadeTransition(ele1, ele2){
        ele1.classList.remove(".main-image-fadein");
        // ele1.classList.add("main-image-fadeout");
        ele2.classList.add("main-image-fadein");
        // ele2.classList.remove(".main-image-fadeout");
      }

    }
  
      // isSecondaryColor = false
  return (
    <Router>
    <div class="cursor-dot-outline"></div>
    <div class="cursor-dot"></div>
      <div id="SaveScreen"><span className="spinner"></span></div>
      <div id="SentScreen"><span>Message Sent</span></div>
      <div className={appContainer}>
        <nav className={`navbar${isSecondaryColor? ' second-navbar':''}`}>
          
          <div className="container"><img className="logo-img" src={NsLogo}  data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="1000"/>
            <ul className={`nav-list${openNav? ' list-open':''}${isSecondaryColor? ' gray-list':''}${animate ? ' show-nav' : ''}`} >
              <li className="nav-li">
                <Link onClick={()=> setPage('/')} to="/" className={path == '/'?'nav-link active':'nav-link'} >Intro<span>Intro</span></Link>
                <div className={path == '/'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              
              <li className="nav-li">
                <Link onClick={()=> setPage('/projects')} to="/projects" className={path == '/projects'?'nav-link active':'nav-link'} >Projects<span style={{whiteSpace:'nowrap'}}>Projects</span></Link>
                <div className={path == '/projects'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPage('/skills')} to="/skills" className={path == '/skills'?'nav-link active':'nav-link'} >Skills & Certs<span style={{whiteSpace:'nowrap'}}>Skills & Certs</span></Link>
                <div className={path == '/skills'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPage('/experience')} to="/experience" className={path == '/experience'?'nav-link active':'nav-link'} >Experience<span>Experience</span></Link>
                <div className={path == '/experience'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
              </li>
              <li className="nav-li">
                <Link onClick={()=> setPage('/services')} to="/services" className={path == '/services'?'nav-link active':'nav-link'} >Services<span>Services</span></Link>
                <div className={path == '/services'?'nav-underline underline active':'nav-underline underline'} ><DotUnderline fillColor={'#98FF98'} /></div>
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
           <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<div className="content-container"><Skills /><Cert /></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function curosrStart(){
  var cursor = {
    delay: 5,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a, button, .icon-btn, .proj-return, .project-container').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

      //   document.addEventListener('scrollend', function(e) {
      //     // Show the cursor
      //     self.cursorVisible = true;
      //     self.toggleCursorVisibility();

      //     // Position the dot
      //     self.endX = e.pageX;
      //     self.endY = e.pageY;
      //     self.$dot.style.top = self.endY + 'px';
      //     self.$dot.style.left = self.endX + 'px';
      // });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();
}

export default App;

// IDEAS 
// 1. on cursor move right ( cursor x position ) change background gradient position 
// 2. HUGE IDEA: make a 3d model of a room and have the user navigate through the room to see different projects
// 3. Create Youtube videos of myself demoing the projects that i created and all their features, expressing teaching and leadership skills
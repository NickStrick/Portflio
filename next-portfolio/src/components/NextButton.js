import React, { useState } from 'react';
import {  Link } from "react-router-dom";
// About component
const NextButton = ({setPage}) => {
    let pagesDict = {
        '/': ['/services', 'Check out my services'],
        '/services': ['/projects', 'View my projects'],
        '/projects': ['/skills', 'Explore my skills'],
        '/skills': ['/experience', 'See my experience'],
        '/experience': ['/contact', 'Get in touch'],
        '/contact': ['',''],

    }
    let thisPath = pagesDict[window.location.pathname] || '/';
    console.log('About component rendered with appPath:', window.location.pathname);
    return (<>
    {thisPath[0]?<Link onClick={()=> setPage(thisPath[0])} to={thisPath[0]} className="next-button nav-contact">{thisPath[1]}<span className="nav-contact-overlay"></span></Link>:<></>}
    </>
  )}
  export default NextButton;
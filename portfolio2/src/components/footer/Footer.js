import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

import SplitThree from '../../images/splitters/bottom-wave-3.js'

const Footer = (props) => {
    const navigate = useNavigate();
    let footerColor = 'rgb(35,40,40)'
    // const [showMail, setMail] = useState(false)
    function handleEmailClick() {
        window.scroll(0,0)
        navigate("/contact");
      }
    // function myFunction() {
    //     var copyText = document.getElementById("mailInput");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999);
    //     document.execCommand("copy");

    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copied: " + copyText.value;
    // }

    // function outFunc() {
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copy to clipboard";
    // }

    if(window.location.pathname.includes('skills')){
        footerColor = 'white'
    }else if(window.location.pathname.includes('projects') || window.location.pathname.includes('experience')){
        footerColor = 'rgb(60,62,70)'
    }

    return (

        <div className="footer content-container" style={{background:"white", paddingTop:'0px'}}>
            <SplitThree fillColor={footerColor} />
            <div className="page-split-padding-dark split-wave-3" style={{background:footerColor}}></div>
            <div className="footer-content" data-aos="fade-right">
                <div className="icon-btn">
                <FontAwesomeIcon icon={faGithub}  target="_blank" onClick={() => window.open('https://github.com/NickStrick')}/>
                </div>
                <div className="icon-btn" target="_blank"  onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} >
                <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="icon-btn" onClick={handleEmailClick}>
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                {/* <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
                <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} /> */}
                {/* <div className='mail-div'>
                    <img src={mail} className='gitLogo mail' target="_blank" onClick={() => setMail(!showMail)} />
                    <div className='mail-text'>
                        {showMail &&
                            <div className="tooltip">
                                <button onClick={myFunction} onMouseOut={outFunc}>
                                    <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                                    Copy text
                            </button>
                            </div>
                        }
                        {showMail && <input type="text" id='mailInput' value='strickerdev@gmail.com' readOnly={true} />}

                    </div>
                </div> */}
            </div>
            <div className='footer-end'>

            </div>
        </div >
    );
}


export default Footer;
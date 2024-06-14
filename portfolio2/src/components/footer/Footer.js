import React, { useState } from 'react';
import './Footer.scss';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'
import linkedin from '../../images/linkedin-2.svg'
import mail from '../../images/mail-100.png'



const Footer = (props) => {
    const [showMail, setMail] = useState(false)

    function myFunction() {
        var copyText = document.getElementById("mailInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
    }

    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    return (

        <div className="footer">
            <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
            <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} />
            <div className='mail-div'>
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
                    {/* {showMail && <p id='mailInput'>strickerdev@gmail.com</p>} */}
                    {showMail && <input type="text" id='mailInput' value='strickerdev@gmail.com' readOnly={true} />}

                </div>
            </div>



        </div >
    );
}


export default Footer;
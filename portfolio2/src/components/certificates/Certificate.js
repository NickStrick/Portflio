import React from 'react';
import './Certificate.scss';

import lambdaCert from '../../images/old/certs/full-stack-web-development.png';
import CertsSVG from '../../images/skills/CertSplit.js'

const Certificate = (props) => {
    let lamb_cert_url= 'https://www.youracclaim.com/badges/b2683aac-d322-43a3-bc78-5101de3c6485/public_url';

    function handleLinkClick(link) {
        // window.scrollTo(0,0)
        window.open(link, "_blank");
      }

    return (<>
        <CertsSVG />
        <div className="page-split-padding-light"></div>
        <div className="section-container section-container-white ">
        <div className="section-content " id='certificate'>
            <h1 className='cert-head'>Certificate</h1>
            <div className='cert-list' >
                
                {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b2683aac-d322-43a3-bc78-5101de3c6485" data-share-badge-host="https://www.youracclaim.com"></div><script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script> */}
                {/* <img src={lambdaCert} alt='lambda cert' /> */}
                           
            
                <div className='image lambda-cert' 
                    onClick={() => handleLinkClick(lamb_cert_url)}>
                <div></div></div> 
            </div>
        </div>
        </div>
        </>
    );
}


export default Certificate;
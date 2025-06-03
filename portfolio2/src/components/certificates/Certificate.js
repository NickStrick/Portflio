import React from 'react';
import './Certificate.scss';

import lambdaCert from '../../images/old/certs/full-stack-web-development.png'; 
import AWStechCert from '../../images/old/certs/awsCloud.png';
import GoogleAICert from '../../images/old/certs/GAIEssentials.png';
import RNCert from '../../images/old/certs/ReactNative.png';  
import CertsSVG from '../../images/skills/CertSplit.js'

const Certificate = (props) => {
    let lamb_cert_url= 'https://www.youracclaim.com/badges/b2683aac-d322-43a3-bc78-5101de3c6485/public_url';
    let list_of_certs = [
        {
            name: 'Full-Stack Web Development + Technical Interviewing',
            by: 'Bloom Institute of Technology',
            cert: lambdaCert,
            link: lamb_cert_url,
            width:'260px',
            className: ''
        },
        {
            name: 'AWS Cloud Technical Essentials',
            by: 'Amazon Web Services',
            cert: AWStechCert,
            link: 'https://coursera.org/share/ab6a624f5c364e98b570dc3bc23162e5',
            width:'380px',
            className: 'bordered'
        },
        {
            name: 'React Native',
            by: 'Meta',
            cert: RNCert,
            link: 'https://coursera.org/share/f8913b31130f23e0c5e841d51ffdd030',
            width:'380px',
            className: 'bordered'
        },
        {
            name: 'Google AI Essentials',
            by: 'Google',
            cert: GoogleAICert,
            link: 'https://coursera.org/share/f27bf12e3402ae6f6677c687b32557df',
            width:'380px',
            className: 'bordered'
        }
    ]

    function handleLinkClick(link) {
        // window.scrollTo(0,0)
        window.open(link, "_blank");
      }

    return (<>
        <CertsSVG />
        <div className="page-split-padding-light"></div>
        <div className="section-container section-container-white ">
        <div className="section-content " id='certificate'>
            <h1 className='cert-head'>Certificates</h1>
            <div className='cert-list' >
                     
                {list_of_certs.map((cert, index) => {
                    return (
                        <div key={index} className={'cert-item ' + cert.className}>
                            <div className='cert-text'>
                                <h2>{cert.name}</h2>
                                <span>Issued by: {cert.by}</span>
                            </div>
                            <div className='certimage-container'>
                                <div className="certimage-background"></div>
                                <div
                                className='image lambda-cert'
                                onClick={() => handleLinkClick(cert.link)}
                                style={{
                                    backgroundImage: `url(${cert.cert})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: cert.width,
                                    cursor: 'pointer'
                                }} />
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        </>
    );
}


export default Certificate;
import React from 'react';
import { useState, useEffect } from 'react';
import './Contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faHammer, faHandshakeSimple, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import BackgroundSvg from '../../images/contact/dotsvg.js'


function Contact(props) {
    let [helpOpen, setHelp] = useState(false);
    let [inputObj, setInput] = useState({
        name:'', 
        message:'',
        email:''
    })

    function checkUrlValue(url){
        let urlArray = url.split('/')
        if(urlArray[0] == 'https:' && urlArray[urlArray.length-1] == 'view'){
            return true;
        }else{
            setInput({url:'',id:inputObj.id})
            alert('URL is in the wrong format! Canceling...')
            return false
        }
    
    }

    const handleSubmit = (e) => {
        let formData = new FormData(e.target)
        for (const pair of formData.entries()) {
            if(pair[0] == 'url'){
                let value = pair[1].split('?')[0]
                let passCheck = checkUrlValue(value)
                if(!passCheck){
                    return false;
                }
            }
        }
        if(helpOpen)setHelp(!helpOpen)
        props.submitAllSectionsData(e)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        if(helpOpen)setHelp(!helpOpen)
        props.setShowModal()
    }
    const handleHelp = (e) => {
        e.preventDefault()
        setHelp(!helpOpen)
    }
    // if(inputObj.id != props.preFill.id) setInput(props.preFill)/
    // console.log(inputObj)
    return (    
    <div className="content-container"><BackgroundSvg />
        <div className="section-container">
            <div className="section-content contact-content" >
                
                <div className='section-column work-column'>
                   
                    <span className="span-block">Let's <span className="color-text">Work</span></span> <span className="span-block">Together</span>
                    <div className="work-icons">
                    <FontAwesomeIcon icon={faPaintBrush} />
                    <FontAwesomeIcon icon={faHammer} />
                    <FontAwesomeIcon icon={faHandshakeSimple} />
                    </div>
                </div>
                <div className='section-column'>
                    
                    <form id="adsModalForm" onSubmit={handleSubmit} data-id={inputObj.id}>
                    <div className="formGroup">
                            <label>Name</label>
                            <div className="form-input-group">
                            <input defaultValue={inputObj.name} name="name" placeholder='Type your name...'/>
                            </div>
                            <div className="form-alert-message"></div>
                        </div>
                        <div className="formGroup">
                            <label>E-Mail</label>
                            <div className="form-input-group">
                                <input defaultValue={inputObj.email} name="email" placeholder='example@email.com'/>
                            </div>
                            <div className="form-alert-message"></div>
                        </div>
                        <div className="formGroup">
                            <label>Message</label>
                            <div className="form-input-group">
                            <textarea rows={5} defaultValue={inputObj.message} message="message" placeholder='Type your message...'></textarea>
                            </div>
                            <div className="form-alert-message"></div>
                         </div>
                        <div className="form-submit">
                           
                            <button type="submit" className="formButton">Send an email &nbsp; &nbsp; <FontAwesomeIcon icon={faPaperPlane} /><span className="formButton-overlay"></span> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;

import React from 'react';
import { useState, useEffect } from 'react';
import './Contact.scss'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faHammer, faHandshakeSimple, faPaperPlane, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import BackgroundSvg from '../../images/contact/dotsvg.js'


function initateConfetti(){
    let isMouseDown = false;
    const overlay = document.getElementById('overlay');
    
    if (overlay.style.opacity !== '0') {
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 500);
      }
      isMouseDown = true;
      let halfWidth = (window.innerWidth / 2);
      spawnConfetti(halfWidth, 50);
      spawnConfetti((halfWidth + ((halfWidth/2)-45)), 50);
      spawnConfetti((halfWidth - ((halfWidth/2)+45)), 50);
      spawnConfetti(halfWidth, 50);
      spawnConfetti((halfWidth + ((halfWidth/2)-45)), 50);
      spawnConfetti((halfWidth - ((halfWidth/2)+45)), 50);
      isMouseDown = false
    
    function spawnConfetti(x, y) {
      for (let i = 0; i < 6; i++) {
        createConfetti(x, y);
      }
    }
    
    function createConfetti(x, y) {
      const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e67e22'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = randomColor;
      confetti.style.left = x + 'px';
      confetti.style.top = y + 'px';
    
      document.body.appendChild(confetti);
    
      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 2;
      const rotationSpeed = (Math.random() - 0.5) * 10;
    
      let xVelocity = velocity * Math.cos(angle);
      let yVelocity = velocity * Math.sin(angle);
      const gravity = 0.1;
    
      function animateConfetti() {
        xVelocity *= 0.99;
        yVelocity += gravity;
        x += xVelocity;
        y += yVelocity;
    
        const currentRotation = parseFloat(confetti.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
        confetti.style.transform = `rotate(${currentRotation + rotationSpeed}deg)`;
    
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
    
        if (y < window.innerHeight) {
          requestAnimationFrame(animateConfetti);
        } else {
          confetti.remove();
        }
      }
    
      requestAnimationFrame(animateConfetti);
    }
}

function Contact(props) {
    let [helpOpen, setHelp] = useState(false);
    let [inputObj, setInput] = useState({
        name:'', 
        message:'',
        email:''
    })

    const fetchData = async (data) => {
        await axios(
        `https://softball-science-data.vercel.app/locker/5`,
        ).then(res => {
        let oldData = JSON.parse(res.data.data[0].value)
            sendEmailData(oldData, data);
        }).catch(err => {
            console.log(err)
        })
    };
    function sentAlert(){
        
        document.getElementById('SentScreen').classList.add('show');
        initateConfetti()
        setTimeout(function(){
            document.getElementById('SentScreen').classList.remove('show');
        },1650)
    }
    const sendEmailData = async (oldData, newData) => {
        let sendData = ''
        if(oldData) sendData = [newData, ...oldData]
        let postString ={ "value":JSON.stringify(sendData) }
        
        await axios.put(
        `https://softball-science-data.vercel.app/locker/5`,
        postString
        ).then(res => {
            // alert('Message sent!')
            setInput({
                name:'', 
                message:'',
                email:''
            })
            document.getElementById('SaveScreen').classList.remove('show');
            sentAlert()
            // props.setData()
        }
        ).catch(err => {
            document.getElementById('SaveScreen').classList.remove('show');
            alert('Something went wrong! did not save your data!')
        })
    }
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
        e.preventDefault()
        let formData = new FormData(e.target)
        let data = {};
        for (const pair of formData.entries()) {
            data[pair[0]] = pair[1]
        }
        document.getElementById('SaveScreen').classList.add('show')
        data.date = new Date().toDateString() 
        fetchData(data)
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
                            <textarea rows={5} defaultValue={inputObj.message} name="message" placeholder='Type your message...'></textarea>
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
        <div className="section-container">
            <div className="section-content contact-content" >
                
                <div className='section-column horizontal-column'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                    <p>Chicago, IL</p>
                </div>
                <div className='section-column'>
                 
                </div>
            </div>
        </div>
        <div id="overlay"></div>
    </div>
    );
}

export default Contact;

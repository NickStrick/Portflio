'use client';

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

import './Contact.scss'
import './HoloText.scss'
import Holo from './HoloText.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faHammer, faHandshakeSimple, faCopy, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import BackgroundSvg from '../../../public/images/contact/dotsvg.js'
import Socials from '../socials/Socials'
import { LIMITS, validateContact } from '../../lib/contactValidation'


// function initateConfetti(){
//     let isMouseDown = false;
//     const overlay = document.getElementById('overlay');
    
//     if (overlay.style.opacity !== '0') {
//         overlay.style.opacity = '0';
//         setTimeout(() => {
//           overlay.style.display = 'none';
//         }, 500);
//       }
//       isMouseDown = true;
//       let halfWidth = (window.innerWidth / 2);
//       spawnConfetti(halfWidth, 50);
//       spawnConfetti((halfWidth + ((halfWidth/2)-45)), 50);
//       spawnConfetti((halfWidth - ((halfWidth/2)+45)), 50);
//       spawnConfetti(halfWidth, 50);
//       spawnConfetti((halfWidth + ((halfWidth/2)-45)), 50);
//       spawnConfetti((halfWidth - ((halfWidth/2)+45)), 50);
//       isMouseDown = false
    
//     function spawnConfetti(x, y) {
//       for (let i = 0; i < 6; i++) {
//         createConfetti(x, y);
//       }
//     }
    
//     function createConfetti(x, y) {
//       const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e67e22'];
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
//       const confetti = document.createElement('div');
//       confetti.className = 'confetti';
//       confetti.style.backgroundColor = randomColor;
//       confetti.style.left = x + 'px';
//       confetti.style.top = y + 'px';
    
//       document.body.appendChild(confetti);
    
//       const angle = Math.random() * Math.PI * 2;
//       const velocity = 2 + Math.random() * 2;
//       const rotationSpeed = (Math.random() - 0.5) * 10;
    
//       let xVelocity = velocity * Math.cos(angle);
//       let yVelocity = velocity * Math.sin(angle);
//       const gravity = 0.1;
    
//       function animateConfetti() {
//         xVelocity *= 0.99;
//         yVelocity += gravity;
//         x += xVelocity;
//         y += yVelocity;
    
//         const currentRotation = parseFloat(confetti.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
//         confetti.style.transform = `rotate(${currentRotation + rotationSpeed}deg)`;
    
//         confetti.style.left = x + 'px';
//         confetti.style.top = y + 'px';
    
//         if (y < window.innerHeight) {
//           requestAnimationFrame(animateConfetti);
//         } else {
//           confetti.remove();
//         }
//       }
    
//       requestAnimationFrame(animateConfetti);
//     }
// }

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const EMPTY_FORM = { name: '', email: '', message: '' };

function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ state: 'idle', text: '' });
    const startedAt = useRef(0);

    useEffect(() => { startedAt.current = Date.now(); }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status.state === 'sending') return;

        const { errors: found, valid } = validateContact(form);
        setErrors(found);
        if (!valid) return;

        const formData = new FormData(e.target);
        setStatus({ state: 'sending', text: '' });
        document.getElementById('SaveScreen')?.classList.add('show');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    website: formData.get('website') || '',
                    turnstileToken: formData.get('cf-turnstile-response') || '',
                    startedAt: startedAt.current,
                }),
            });
            const out = await res.json().catch(() => ({}));
            if (!res.ok || !out.ok) {
                if (out.errors) setErrors(out.errors);
                setStatus({ state: 'error', text: out.error || 'Something went wrong. Please email instead.' });
                return;
            }
            setForm(EMPTY_FORM);
            setStatus({ state: 'sent', text: 'Thanks! Your message was sent.' });
            const sent = document.getElementById('SentScreen');
            sent?.classList.add('show');
            setTimeout(() => sent?.classList.remove('show'), 1650);
        } catch {
            setStatus({ state: 'error', text: 'Network error. Please try again or email instead.' });
        } finally {
            document.getElementById('SaveScreen')?.classList.remove('show');
            window.turnstile?.reset();
        }
    };
    function buttonClick(link){
        window.open(link, "_blank");
    }
    let contactLinks = [
        // {link:'https://www.upwork.com/freelancers/~017de34218f020bdcb?mp_source=share', name:'Upwork', icon:faUpwork, displayText: 'work', iconStyle:{marginBottom: '-5px'}},
        // {link:'https://www.fiverr.com/users/nic_stricker', name:'Fiverr', icon:null, displayText: 'fiverr.',iconStyle:{}},
         {link:'https://calendly.com/nickolasstricker/stricker-digital-discussion', name:'BookAMeeting', icon:null, displayText: 'Book A Meeting',iconStyle:{}},
         {link:'https://www.strickerdigital.com', name:'strickerdigital', icon:null, displayText: 'View my offers',iconStyle:{}},
         {link:'/NickStricker-SolutionsEngineer-Resume.pdf', name:'Resume', icon:null, displayText: 'View My Résumé',iconStyle:{}},
    ]
    let contactInfo = [
        {name:'Email Inquires to', value:'nickolasstricker@gmail.com'},
        {name:'or call / text to', value:'(630) 405-8427'},
    ]
    let intentOptions = [
        {
            label: 'I want to interview Nick for an SE / Forward Deployed / CSE corporate role.',
            link: 'mailto:nickolasstricker@gmail.com?subject=SE%2FForward%20Deployed%2FCSE%20Role%20Inquiry',
        },
        {
            label: 'I want a Revenue Leak Audit or done-for-you fixes for my store or app (Stricker Digital).',
            link: 'mailto:nickolasstricker@gmail.com?subject=Revenue%20Leak%20Audit%20Inquiry',
        },
    ]
    return (    
    <div className="content-container"><BackgroundSvg />
        <div className="section-container">
            <div className="section-content contact-content" >
                
                <div className='section-column work-column'>

                    <span className="span-block">{`Let's`} <span className="color-text">Work</span></span> <span className="span-block">Together</span>
                    <p className="contact-hook">{`Let's align your technical architecture with your business goals.`}</p>
                    <div className="work-icons">
                    <FontAwesomeIcon icon={faPaintBrush} />
                    <FontAwesomeIcon icon={faHammer} />
                    <FontAwesomeIcon icon={faHandshakeSimple} />
                    </div>
                </div>
                <div className='section-column'>
                    
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        {/* Honeypot: hidden from people, irresistible to bots. */}
                        <div className="hp-field" aria-hidden="true">
                            <label htmlFor="contact-website">Website</label>
                            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="contact-name">Name</label>
                            <div className="form-input-group">
                                <input id="contact-name" name="name" value={form.name} onChange={handleChange}
                                    maxLength={LIMITS.name.max} autoComplete="name" required
                                    aria-invalid={!!errors.name} placeholder='Type your name...'/>
                            </div>
                            <div className="form-alert-message" role="alert">{errors.name}</div>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="contact-email">E-Mail</label>
                            <div className="form-input-group">
                                <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
                                    maxLength={LIMITS.email.max} autoComplete="email" required
                                    aria-invalid={!!errors.email} placeholder='example@email.com'/>
                            </div>
                            <div className="form-alert-message" role="alert">{errors.email}</div>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="contact-message">Message</label>
                            <div className="form-input-group">
                                <textarea id="contact-message" rows={5} name="message" value={form.message} onChange={handleChange}
                                    maxLength={LIMITS.message.max} required
                                    aria-invalid={!!errors.message} placeholder='Type your message...'></textarea>
                            </div>
                            <div className="form-alert-message" role="alert">
                                {errors.message || (form.message.length > LIMITS.message.max * 0.9 && `${form.message.length}/${LIMITS.message.max}`)}
                            </div>
                        </div>
                        {TURNSTILE_SITE_KEY && (
                            <>
                                <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
                                <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />
                            </>
                        )}
                        <div className="form-submit">
                            {status.text && <p className={`form-status form-status-${status.state}`} role="status">{status.text}</p>}
                            <button type="submit" className="formButton" disabled={status.state === 'sending'}>
                                {status.state === 'sending' ? 'Sending...' : 'Send a message'} &nbsp; &nbsp; <FontAwesomeIcon icon={faPaperPlane} /><span className="formButton-overlay"></span>
                            </button>
                        </div>
                    </form>
                    <div className='intent-options'>
                        {intentOptions.map((option, index) => (
                            <button
                                key={index}
                                className="intent-option main-btn"
                                onClick={() => buttonClick(option.link)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <div className='contact-links'>
                        {contactLinks.map((platform, index)=>{
                            return(
                                <div className='contact-link' key={index}>
                                    <button title={platform.name} onClick={()=>buttonClick(platform.link)} className="platform-link main-btn main-btn-icon">
                                         {platform.icon && <FontAwesomeIcon style={platform.iconStyle} icon={platform.icon} />}
                                         {platform.displayText && <span>{platform.displayText}</span>}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='contact-info-section'>
                        {contactInfo.map((info, index)=>{
                            return(
                                <div className='contact-info-line' key={index} id={'contactInfo' + index}>
                                    <div className='contact-info-box'>
                                        <span className='contact-info-name'>{info.name}</span>
                                        <span className='contact-info-value'>{info.value}</span>
                                        <FontAwesomeIcon icon={faCopy} className='copy-icon' onClick={()=>{
                                            navigator.clipboard.writeText(info.value);
                                            document.getElementById('contactInfo' + index).classList.add('show-copy');
                                            setTimeout(() => {
                                                document.getElementById('contactInfo' + index).classList.remove('show-copy');
                                            }, 1500);
                                        }} />
                                        
                                    </div>
                                    <div  className="copy-screen">
                                        <span className="copy-screen-text">Copied to clipboard!</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <Socials  addContactDetails={false}/>
        <div className="section-container">
            <div className="section-content contact-content" >

                <div className='horizontal-column'>
                {/* <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p> */}
                    {/* <p>Greater Chicago Area, IL</p> */}
                    <Holo />
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

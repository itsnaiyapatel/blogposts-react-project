import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaQuestion, FaRocketchat, FaTwitter, FaYoutube } from 'react-icons/fa';
import {MdRememberMe} from 'react-icons/md'
import '../assets/css/Footer.css'


function Footer() {
  return (
    <div className='footer'>

      <div className="footer1">

        <div className="section">
          <FaQuestion size={30} className='icons' />
          <Link to='#'>Help Center</Link>
          <p>Ask a question ?</p>
          <p>Get an answer</p>
        </div>

        <div className="section">
          <MdRememberMe size={30} className='icons' />
          <Link to='#'>Membership</Link>
          <p>Become a member</p>
          <p>Use our premium services</p>
        </div>
        
        <div className="social-media">
          <FaFacebook size={30} className='icons' />
          <FaTwitter size={30} className='icons' />
          <FaYoutube size={30} className='icons' />
          <FaLinkedin size={30} className='icons' />
          <FaInstagram size={30} className='icons' />
        </div>
      </div>

      <div className="footer2">
        <Link>Careers</Link>
        <Link>Security</Link>
        <Link>Legal</Link>
        <Link>Privacy</Link>
        <Link>Accessibilty</Link>
        <Link>AdChoice</Link>
      </div>

      <div className="footer3">
        <p>@Blogposts. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
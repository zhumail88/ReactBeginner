import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footerContainer">

      <div className="footerText">
        <p>Shumail Assignment 3</p>
      </div>

      <div className="gitHubLink">
        <p>My Github</p>
        <a href="https://github.com/zhumail88" target="_blank"> 
          <img src="src\assets\github.png" alt="git" />
        </a>
      </div>

      <div className="contactMe">

        <div className="contactMeText">
          <p>Contact Me</p>
        </div>

        <div className="links">
          <a href="https://wa.me/+923132052071?text=Hello%20Zhumail" target="_blank">
            <img src="src\assets\whatsapp.png" alt="Whatsapp" />
          </a>
          
          <a href="https://www.instagram.com/shumaill.15/" target="_blank">
            <img src="src\assets\instagram.png" alt="instagram" />
          </a>
          
          <a href="mailto:shumailtassadaq3@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
          target="_blank">
            <img src="src\assets\gmail.png" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  )
}

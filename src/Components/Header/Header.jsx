import React from 'react'
import './Header.css'
import { Link , Route ,Routes } from 'react-router-dom'

export default function () {

  return (
    <div className="headerContainer">

      <div className="logo">
        <img src="src\assets\logo.png" alt="v" />
        
        <h1>CARDS</h1>
      </div>

      <div className="links">
        <ul>
          <li>Home</li>
          <li>Information</li>
          <li>About Us</li>
          <li>More Cards</li>
        </ul>

      </div>
    </div>
  )
}



import React from 'react'
import logo from './Images/logo.svg'
import hero from './Images/hero.jpg'
import icon from './icon.svg'
import './Component.css'

function Component() {


  return (
    <div className='container'>

      <div className='contains'>
        <img src={logo} alt='logo' />
        <h1>WE'RE<br></br><span>COMING<br></br>SOON</span></h1>
        <div><p>Hello Shoppers! We are currently building our new<br></br> fashion store. Add your email below to stay up-to-date with<br></br> announcements and our launch deals.</p></div>

        <div className='text'>
          <input type="text" id='txt' placeholder='janeappleseed#email.com'></input>
          <img src={icon} alt='icon' />
          <button id='butt'>{'>'}</button>
        </div>
        <div className='tx'><p>Please provide a valid email</p></div>
      </div>
      
      <div className='pix'>
        <img src={hero} alt='hero' />
      </div>
    </div>
    
  )
}

export default Component
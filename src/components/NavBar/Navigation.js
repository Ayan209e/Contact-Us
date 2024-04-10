import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src='../images/logo.png'/>
      </div>
      <div className='list'>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </div>
  )
}

export default Navigation
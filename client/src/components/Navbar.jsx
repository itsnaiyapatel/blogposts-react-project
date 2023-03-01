import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import logo from '../assets/images/logo.png'

import UserAvatarContainer from './UserAvatarContainer'
import '../assets/css/Navbar.css'

function Navbar() {

  const profileImage = require('../assets/images/profileImage.jpg')

  const userName = 'Naiya';

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Registration</Link>
        <Link to='/addPost'>Add Post</Link>     
      </div>
      <UserAvatarContainer profileImage={profileImage} userName={userName} />

    </div>
  )
}

export default Navbar

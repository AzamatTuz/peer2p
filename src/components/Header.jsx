import React from 'react'
import HeaderNav from './HeaderNav'
import { Link } from 'react-router-dom'

function Header(props) {
    
  return (
    <header className={props.className}>
        <Link to={'/'}><img src="src/assets/logo.png" alt="" /></Link>
        <HeaderNav/>
    </header>
  )
}

export default Header
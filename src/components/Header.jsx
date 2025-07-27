import React from 'react'
import HeaderNav from './HeaderNav'

function Header(props) {
    
  return (
    <header className={props.className}>
        <img src="src/assets/logo.png" alt="" />
        <HeaderNav/>
    </header>
  )
}

export default Header
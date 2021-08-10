import React from 'react'
import NavMenu from '@components/Header/NavMenu'

function Header() {  
  return (
    <header className='header'>
      <div className='content header__content'>
        <NavMenu components={['Home', 'About', 'Projects', 'Other']}></NavMenu>
      </div>
    </header>
  )
}

export default Header
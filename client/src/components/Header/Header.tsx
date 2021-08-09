import React from 'react'
import NavMenu from '@components/Header/NavMenu'

function Header() {  
  return (
    <header className='header'>
      <NavMenu components={['Home', 'About', 'Projects', 'Other']}></NavMenu>
    </header>
  )
}

export default Header
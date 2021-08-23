import React from 'react'
import NavMenu from '@components/Header/NavMenu'

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="content header__content">
        <NavMenu components={['Home', 'About', 'Projects', 'Other']} />
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import NavigationMenu from './NavigationMenu'

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="content footer__content">
        <NavigationMenu />
      </div>
    </footer>
  )
}

export default Footer

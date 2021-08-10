import React from 'react'
import NavItem from '@components/Header/NavItem'

interface NavMenuProps {
  components: string[]
}

function NavMenu({ components }: NavMenuProps) {
  return (
    <nav className="header__navigation">
      {components.map((item, index) => (
        <NavItem key={`navmenu${index}`} component={item} />
      ))}
    </nav>
  )
}

export default NavMenu

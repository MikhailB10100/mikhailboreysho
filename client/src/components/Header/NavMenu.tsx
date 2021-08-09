import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavMenuProps {
  components: string[]
}

function createNavLink (component: string, index: number) {
  return (
    <NavLink className='navigation-item' key={`navmenu${index}`} to={`/${component.toLowerCase()}`}>
      <span>
        {component}
      </span>
    </NavLink>
  )
}

function NavMenu ({components}: NavMenuProps) {
  return (
    <nav className='navigation'>
      {components.map((item, index) => createNavLink(item, index))}
    </nav>
  )
}

export default NavMenu
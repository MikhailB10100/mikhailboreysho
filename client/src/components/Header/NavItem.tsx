import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  component: string,
  index: number
}

function NavItem ({component, index}: NavItemProps) {
  return (
    <NavLink className='navigation-item' key={`navmenu${index}`} to={`/${component.toLowerCase()}`}>
      <span>
        {component}
      </span>
    </NavLink>
  )
}

export default NavItem
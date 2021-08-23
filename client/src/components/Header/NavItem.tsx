import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  component: string
}

function NavItem({ component }: NavItemProps): JSX.Element {
  return (
    <NavLink className="header__n-item" to={`/${component.toLowerCase()}`}>
      <span>{component}</span>
    </NavLink>
  )
}

export default NavItem

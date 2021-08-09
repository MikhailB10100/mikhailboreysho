import React from 'react'
import NavItem from '@components/Header/NavItem'

interface NavMenuProps {
  components: string[]
}

function NavMenu ({components}: NavMenuProps) {
  return (
    <nav className='navigation'>
      {components.map((item, index) => <NavItem component={item} index={index} />)}
    </nav>
  )
}

export default NavMenu
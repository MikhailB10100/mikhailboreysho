import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@components/Pages/Home'
import About from '@components/Pages/About'
import Projects from '@components/Pages/Projects'
import Other from '@/components/Pages/Home'


function Routing() {
  const router = (
    <Switch>
      <Route exact path={['/', '/home']}>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/other'>
        <Other />
      </Route>
    </Switch>
  )
  return (
    <div className='content'>
      {router}
    </div>
  )
}

export default Routing
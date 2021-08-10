import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@pages/Home/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Other from '@pages/Other'


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
    <div className='page'>
      <div className='content page__content'>
        {router}
      </div>
    </div>
  )
}

export default Routing
import React from 'react'
import Home from '@components/Home/Home'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Routing from '@components/router/Routing'


function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content-body'>
        <Routing />
        <Footer />
      </div>
    </div>
  )
}

export default App
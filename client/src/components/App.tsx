import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Routing from '@components/router/Routing'

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}

export default App

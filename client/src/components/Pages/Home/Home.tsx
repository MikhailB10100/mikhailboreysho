import React from 'react'

import CircleDiagram from '@pages/Home/CircleDiagram'

function Home() {
  return (
    <div className='home-page'>
      <div className='home-page__right'>

      </div>
      <div className='home-page__left'>
        <div className='home-page__left_top'>
          <CircleDiagram />
        </div>
        <div className='home-page__left_bottom'></div>    
      </div>
    </div>
  )
}

export default Home
import React from 'react'

import LastProject from '@pages/Home/LastProject'

function Home(): JSX.Element {
  return (
    <div className="home-page">
      <div className="home-page__right"></div>
      <div className="home-page__left">
        <div className="home-page__left_top">
          <LastProject />
        </div>
        <div className="home-page__left_bottom"></div>
      </div>
    </div>
  )
}

export default Home

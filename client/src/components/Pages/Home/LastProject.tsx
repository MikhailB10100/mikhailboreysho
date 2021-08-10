import React from 'react'

import CircleChart from '@common/CircleChart'

const languagesData = [
  {
    language: 'JavaScript',
    value: 10,
    color: '#f1e05a'
  },
  {
    language: 'SCSS',
    value: 14,
    color: '#c6538c'
  },
  {
    language: 'HTML',
    value: 2,
    color: '#e34c26'
  },
  {
    language: 'TypeScript',
    value: 12,
    color: '#2b7489'
  }
]

const hole = { 
  size: 0.5, 
  color: 'white'
}

const canvas = {
  width: 200,
  height: 200
}

const data = { languagesData, hole, canvas }

function LastProject() {
  return (
    <CircleChart languagesData={languagesData} hole={hole} canvas={canvas} />
  )
}

export default LastProject
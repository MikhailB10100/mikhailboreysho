import React from 'react'

import CircleChart from '@common/Project/CircleChart'
import ProjectInfo from '@common/Project/ProjectInfo'

const languagesData = [
  {
    language: 'JavaScript',
    value: 10,
    color: '#f1e05a',
  },
  {
    language: 'SCSS',
    value: 14,
    color: '#c6538c',
  },
  {
    language: 'HTML',
    value: 2,
    color: '#e34c26',
  },
  {
    language: 'TypeScript',
    value: 12,
    color: '#2b7489',
  },
]

const hole = {
  size: 0.5,
  color: 'white',
}

const canvasOptions = {
  width: 200,
  height: 200,
}

const name = 'Emoji Shop'

const chartData = {
  languagesData,
  hole,
  canvasOptions,
}

const stack = [
  {
    name: 'React',
    side: 'Front',
    type: 'Core',
  },
]

const data = {
  name,
  chartData,
  stack,
}

function LastProject(): JSX.Element {
  return <ProjectInfo data={data} additionalClass="last-project" />
}

export default LastProject

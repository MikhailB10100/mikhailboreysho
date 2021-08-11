import React from 'react'

import CircleChart from '@common/Project/CircleChart'
import { Chart } from '@common/Project/chart_types'

function ProjectLanguages({ chartData }: Chart): JSX.Element {
  return (
    <div className="project__languages">
      <h1>Languages</h1>
      <div className="project__l-info">
        <div className="project__l-piechart">
          <CircleChart chartData={chartData} />
        </div>
        <div className="project__l-data">
          <span>2</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectLanguages

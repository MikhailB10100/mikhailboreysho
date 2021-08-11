import React from 'react'

import ProjectLanguages from '@common/Project/ProjectLanguages'
import { Chart, ChartDataProps } from '@common/Project/chart_types'

type TechnologyProps = {
  name: string
  side: string
  type: string
}

type ProjectProps = {
  name: string
  chartData: ChartDataProps
  stack: TechnologyProps[]
}

interface ProjectComponentProps {
  data: ProjectProps
  additionalClass: string
}

function ProjectInfo({
  data,
  additionalClass,
}: ProjectComponentProps): JSX.Element {
  const { name, chartData, stack } = data
  return (
    <div className={`project ${additionalClass}__project`}>
      <ProjectLanguages chartData={chartData} />
    </div>
  )
}

export default ProjectInfo

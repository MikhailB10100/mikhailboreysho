type LanguageProps = {
  language: string
  value: number
  color: string
}

type CanvasProps = {
  width: number
  height: number
}

type HoleProps = {
  size: number
  color: string
}

export interface ChartDataProps {
  languagesData: LanguageProps[]
  hole: HoleProps
  canvasOptions: CanvasProps
}
export type Chart = {
  chartData: ChartDataProps
}

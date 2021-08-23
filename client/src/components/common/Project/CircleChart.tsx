import React, { useEffect, useRef } from 'react'
import { ChartDataProps, Chart } from '@common/Project/chart_types'

interface DrawPieceProps {
  ctx: CanvasRenderingContext2D | null
  x: number
  y: number
  radius: number
  startAngle: number
  endAngle: number
  color: string
}

function drawPiece({
  ctx,
  x,
  y,
  radius,
  startAngle,
  endAngle,
  color,
}: DrawPieceProps) {
  if (ctx) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fill()
  }
}

interface PieChartProps {
  chartData: ChartDataProps
  canvas: HTMLCanvasElement | null
}

function PieChart({ chartData, canvas }: PieChartProps) {
  if (!canvas) return
  const { languagesData, hole, canvasOptions } = chartData
  const { width, height } = canvasOptions
  const ctx = canvas.getContext('2d')
  const x = width / 2
  const y = height / 2
  const radius = Math.min(x, y)
  const PI = Math.PI
  const totalValue = languagesData.reduce((acc, cur) => (acc += cur.value), 0)
  const onePointValueAngle = (PI * 2) / totalValue //angle by 1 value point

  let startAngle = 0
  for (let i = 0; i < languagesData.length; i++) {
    const { value, color } = languagesData[i]
    const sliceAngle = onePointValueAngle * value //angle by current language value points
    const endAngle = startAngle + sliceAngle
    const pieceOptions = { ctx, x, y, radius, startAngle, endAngle, color }
    drawPiece(pieceOptions)
    startAngle += sliceAngle
  }

  if (hole) {
    const { size, color } = hole
    const iRadius = size * radius
    const holeOptions = {
      ctx,
      x,
      y,
      radius: iRadius,
      startAngle: 0,
      endAngle: PI * 2,
      color,
    }
    drawPiece(holeOptions)
  }
}

function CircleChart({ chartData }: Chart): JSX.Element {
  const { width, height } = chartData.canvasOptions
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas: CanvasRenderingContext2D | null = canvasRef.current
    const options = {
      chartData,
      canvas,
    }

    PieChart(options)
  }, [])

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default CircleChart

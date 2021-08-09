import React, { useEffect, useRef } from 'react'

interface PieSliceProps {
  ctx: CanvasRenderingContext2D | null
  x: number
  y: number
  radius: number
  startAngle: number
  endAngle: number
  color: string
}


type languagesDataOptions = {
  [key: string]: number 
}

interface PiechartProps {
  options: {
    canvas: HTMLCanvasElement | null
    colors: string[]
    data: languagesDataOptions
    doughnutHoleSize: number
  }
}


function Piechart({options}: PiechartProps){
  const {canvas, colors, data, doughnutHoleSize} = options
  if (!canvas) return
  const {width, height} = canvas
  const ctx = canvas.getContext('2d')

  const x = width/2
  const y = height/2
  const eRadius = Math.min(x,y)
  const iRadius = doughnutHoleSize * Math.min(x,y)

  let totalValue: number = 0
  for (let key of Object.keys(data)) {
    totalValue += data[key]
  }

  let colorIndex: number  = 0
  let startAngle: number = 0

  for (let key of Object.keys(data)) {
    let sliceAngle = 2 * Math.PI * data[key] / totalValue
    drawPieSlice(
      {
        ctx,
        x,
        y,
        radius: eRadius,
        startAngle,
        endAngle: startAngle+sliceAngle,
        color: colors[colorIndex % colors.length]
      }
    )
    startAngle += sliceAngle
    colorIndex++
  }

  drawPieSlice(
    {
      ctx, 
      x, 
      y, 
      radius: iRadius, 
      startAngle: 0, 
      endAngle: Math.PI * 2, 
      color: 'rgba(0,0,0,.55)'
    }
  )
}

function drawPieSlice({ ctx, x, y, radius, startAngle, endAngle, color }: PieSliceProps) {
  if (ctx) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fill()
  }
}

const myVinyls = {
  classicalMusic: 10,
  alternativeRock: 14,
  pop: 2,
  jazz: 12
}

function CircleDiagram() {
  const rf = useRef(null)

  useEffect(() => {
    const ctx: CanvasRenderingContext2D | null = rf.current

    const options = {
      canvas: ctx,
      data: myVinyls,
      colors: ["#fde23e","#f16e23", "#57d9ff","#937e88"],
      doughnutHoleSize: 0.5,
    }

    Piechart({options})
  }, [])
  
  return (
    <canvas ref={rf} width={300} height={300} />
  )
}

export default CircleDiagram
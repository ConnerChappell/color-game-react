import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

type Color = {
  group: string
  hex: string
  name: string
  rgb: string
  theme: string
}

const fetchColors = async (): Promise<Color[]> => {
  const res = await fetch('https://www.csscolorsapi.com/api/colors')
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return data.colors
}

const getRandomColor = (colors: Color[]): Color => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function RandomColor() {
  const [randomColor, setRandomColor] = useState<Color | null>(null)

  const {
    data: colorData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['colors'],
    queryFn: fetchColors,
  })

  useEffect(() => {
    if (colorData) {
      setRandomColor(getRandomColor(colorData))
    }
  }, [colorData])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <p>Color: {randomColor?.name}</p>
    </div>
  )
}

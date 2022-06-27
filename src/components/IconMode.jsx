import { useState } from 'react'

export default function IconMode () {
  const [colorMode, setColorMode] = useState(true)
  const changeColorMode = () => {
    setColorMode(prev => !prev)
  }

  return (
    <span onClick={changeColorMode}>
      {
        colorMode
          ? '🌙'
          : '☀️'
      }
    </span>
  )
}

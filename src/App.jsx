import { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import ColorPalette from './components/ColorPalette'
import { white } from './utils/rgb'

function App() {
const [selectedColor, setSelectedColor] = useState(white);
  return (
    <>
      <Canvas color={selectedColor}></Canvas>
      <ColorPalette select={setSelectedColor}/>
    </>
  )
}

export default App

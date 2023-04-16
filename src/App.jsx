import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AnimatedCursor from "react-animated-cursor"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<AnimatedCursor
  color="255,255,255"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'
  }}
/>
    <h1>HEy</h1>
    </div>
  )
}

export default App

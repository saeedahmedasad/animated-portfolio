import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AnimatedCursor from "react-animated-cursor"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <AnimatedCursor
      innerSize={15}
      outerSize={45}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.6}
      outerScale={2}
      clickables ={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <h1>HEy</h1>
    </div>
  )
}

export default App

// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import Home from './Components/Pages/Home'
import BallSurfaceArea from './Components/Pages/MathStack/BallSurfaceArea'
import ConeSurfaceArea from './Components/Pages/MathStack/ConeSurfaceArea'
import CubeSurfaceArea from './Components/Pages/MathStack/CubeSurfaceArea'
import CylindricalTank from './Components/Pages/MathStack/CylindricalTank'

function App () {
  return (
    <div>
      <div className="App">
        <Home />

      </div>
      <div>
        <BallSurfaceArea />
      </div>
      <div>
        <CubeSurfaceArea />
      </div>
      <div>
        <ConeSurfaceArea />
      </div>
      <div>
        <CylindricalTank />
      </div>
    </div>

  )
}

export default App

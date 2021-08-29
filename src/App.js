// eslint-disable-next-line no-use-before-define
import React from 'react'
import './App.css'
import Home from './Components/Pages/Home'
import BallSurfaceArea from './Components/Pages/MathStack/BallSurfaceArea'

function App () {
  return (
    <div>
      <div className="App">
        <Home />

      </div>
      <div>
        <BallSurfaceArea />
      </div>
    </div>

  )
}

export default App

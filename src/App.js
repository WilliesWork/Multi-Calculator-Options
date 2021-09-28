// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Drawer from './Common/Drawer'
import { store } from './redux/store'
import {makeStyles } from '@material-ui/core'
import Home from './Components/Pages/Home'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter as Router} from 'react-router-dom'

const useStyles = makeStyles({
container: {
  display: 'flex',
}
})

function App () {
  const {container} = useStyles()

  return (
    <Router>
 <Provider store={store}>
      <div className={container}>
      <Drawer />
      <AppRoutes />
      </div>
     

    </Provider>
    </Router>
   
    
  )
}

export default App

// eslint-disable-next-line no-use-before-define
import React from 'react'
import '../../App.css'
import TopBar from '../../Common/TopBar'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flex: 1,
    minHeight: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})
const Home = () => {
  const { paper } = useStyles()
  return (
    <>
      <TopBar />
      <div className='HomeContainer'>

        <div className={paper}>

        </div>
      </div>

    </>

  )
}

export default Home

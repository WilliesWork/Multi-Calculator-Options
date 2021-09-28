// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import '../../App.css'
import TopBar from '../../Common/TopBar'
import { makeStyles } from '@material-ui/core'
import { fetchGetUnits } from '../../redux/slice/GetUnits'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
  // paper: {
  //   display: 'flex',
  //   flex: 1,
  //   minHeight: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   padding: 10
  // },
  paper: {
    flex: 1,
    flexDirection: 'column',
  },
  exchangeRates: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around'
  },
  currencyConverter: {
    backgroundColor: 'grey',
    width: '80%',
    height: '300px',
    marginLeft: '12%',
    borderRadius: '5px',
    boxShadow: '5px 3px 3px blue'
  },
  calculatorOptions: {
   flexDirection: 'column',
  },
})
const Home = () => {
  const { paper, currencyConverter,exchangeRates } = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    const bootStrap = () => {
      dispatch(fetchGetUnits())
    }
    bootStrap()
  }, [])
  return (
    <>
     
        <div className={paper}>
          <div className={exchangeRates}>
          <p>Dollar 22.0</p>
          <p>Pound 20.2</p>
          <p>Euro 25.6</p>
          <p>Rand 1.50</p>
          </div>
          <div className={currencyConverter}>
            <p>Exchange</p>
          </div>
          <div>
            <img src={} />

          </div>
         
        </div>
     
      

    </>

  )
}

export default Home

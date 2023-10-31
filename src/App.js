import React from 'react'
import {Route,Routes} from "react-router-dom"
import Nabar from './components/Layout/Nabar'
import Home from './components/Home/Home'
import Company from './components/Companies/Company'
import Info from './components/Info/Info'
import Cards from './components/Cards/Cards'
import Connections from './components/Connections/Connections'
import CustomLayouts from './components/CustomLayouts/CustomLayouts'
import LadOut from './components/CustomLayouts/LadOut'
import Organize from './components/Organize/Organize'
import LastPage from './components/LastPage/LastPage'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
  <>
    <Nabar/>
    <Home/>
    <Company/>
    <Info/>
    <Cards/>
    <Connections/>
    <CustomLayouts/>
    <LadOut/>
    <Organize/>
    <Company/>
    <LastPage/>
    <Footer/>
  </>
  )
}

export default App

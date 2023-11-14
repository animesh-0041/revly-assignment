import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Doubts from '../pages/Doubts'
import History from '../pages/History'

const MainRoutes = () => {
    const data=JSON.parse(localStorage.getItem("revly"))||null
  return (
   <Routes>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/doubts' element={<Doubts/>}></Route>
    <Route path='/doubts/history' element={<History/>}></Route>
   </Routes>
  )
}

export default MainRoutes

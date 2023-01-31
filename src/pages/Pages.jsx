import React from 'react'
import {Home} from  './Home'
import {Route,Routes} from  'react-router-dom'
import { Cuisine } from './Cuisine'

export const Pages = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cuisine' element={<Cuisine/>}>
          <Route path='/cuisine:type' element={<Cuisine/>}> </Route>
        </Route>
    </Routes> 
   </>
  )
}

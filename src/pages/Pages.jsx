import React from 'react'
import {Home} from  './Home'
import {Route,Routes} from  'react-router-dom'
import { Cuisine } from './Cuisine'
import { Search } from  './Search'
import { Recipe } from './Recipe'

export const Pages = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cuisine' element={<Cuisine/>}>
          <Route path='/cuisine/:type' element={<Cuisine/>}> </Route>
        </Route>
        <Route path='/search/:search' element={<Search/>}></Route>
        <Route path='/recipe/:id' element={<Recipe/>}></Route>
    </Routes> 
   </>
  )
}

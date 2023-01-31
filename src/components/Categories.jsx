import React from 'react'
import {FaPizzaSlice,FaHamburger} from  'react-icons/fa'
import {GiNoodles,GiChopsticks} from  'react-icons/gi'
import styled from  'styled-components'
import {NavLink} from  'react-router-dom'

export const Categories = () => {
  return (
    <List>
       <NavLink to={'/cuisine/Italian'}>
        <div>
            <FaHamburger/>
            <h4>Italian</h4>
        </div>
       </NavLink>
       <NavLink to={'/cuisine/American'}>
        <div>
                <FaPizzaSlice/>
                <h4>American</h4>
        </div>
       </NavLink>
       <NavLink to={'/cuisine/Thai'}>
       <div>
            <GiNoodles/>
            <h4>Thai</h4>
       </div>
       </NavLink>
       <NavLink to={'/cuisine/Japanese'}>
        <div>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </div>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

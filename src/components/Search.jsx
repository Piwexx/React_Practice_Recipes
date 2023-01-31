import React from 'react'
import { useState } from 'react'
import {FaSearch} from  'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from  'styled-components'
export const Search = () => {

    const [input,setInput] = useState("")
    const navigate = useNavigate()
    
    const submitHandler = (e) =>{
        e.preventDefault()
        navigate( '/search/'+input)
    }
    
  return (
    <>
        <FormStyle onSubmit={submitHandler}>
            {console.log(input)}
           <div>
            <FaSearch/>
            <input type="search" value={input} onChange={(e) =>setInput(e.target.value)}></input>
           </div>
        </FormStyle>
    </>
  )
}

const FormStyle = styled.form`
    margin:3rem 20rem;
    mar
    
    div{
        width: 100%;
        position: relative;
    }

        input{
        border:none;
        background :linear-gradient(35deg,#494949,#313131) ;
        font-size: 1.5rem;
        color:white;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        }
        svg{
            position: absolute;
            top:9%;
            left:29%;
            transform: translate(100%,-50%);
            color:white;
        }
     
`;
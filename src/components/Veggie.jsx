import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from  'styled-components'
import {Splide,SplideSlide} from  '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export const Veggie = () => {
  const [veggie,setVeggie] = useState([])

  const getVeggie= async() =>{

    const check = localStorage.getItem("Veggie")

    if(check){
      setVeggie(JSON.parse(check))
    }else{
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API_KEY}&number=9&tags=vegetarian`)
      const data = await response.json()
      localStorage.setItem("Veggie",JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }
    
  }
 
  useEffect(()=>{
    getVeggie()
  },[])

  return (
    <>
          <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
              perPage:3,
              arrows : false,
              pagination:false,
              drag: 'free',
              gap: '5rem'
            }}>
              {veggie.map(recipe => {
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.titles}></img>
                      <Gradient/>
                    </Card>
                  </SplideSlide>
                )
              })}
            </Splide>
          </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
      margin : 4rem 0 rem;

      
`;

const Card = styled.div`
  min-height : 25rem;
  border-radius:2rem;
  overflow:hidden;
 

  img{
    border-radius:2rem;
    position: absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center
  }

`;

const Gradient = styled.div`
  z-index:3;
  position : absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
  border-radius:2rem;
`;
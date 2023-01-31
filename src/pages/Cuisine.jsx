import React, { useEffect, useState } from 'react'
import styled from  'styled-components'
import {motion} from  'framer-motion'
import {Link, link,useParams} from  'react-router-dom'


export const Cuisine = () => {

    const [cuisine,setCuisine] = useState([])
    let params = useParams()

  const getCuisine = async(name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY }&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }
  useEffect(()=>{
    getCuisine(params.type)
  },[params.type])

  return (
      <>
      <Grid>
        {cuisine.map(recipe =>{
          return (
            <Card key={recipe.id}>
                <img src={recipe.image} alt={recipe.title}></img>
                <h4>{recipe.title}</h4>
                <Link to={`/recipe?id&${recipe.id}`}></Link>
            </Card>
          )
        })}
      </Grid>
      </>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-gap : 3rem
`;

const Card = styled.div`
  img{
    width:100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;
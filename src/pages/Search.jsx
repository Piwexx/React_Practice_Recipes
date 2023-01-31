import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Search = () => {

    const [data,setData] = useState([])
    let params = useParams()

  const getSearch = async(search) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY }&query=${search}`)
    const recipes = await data.json()
    setData(recipes.results)
  }
  useEffect(()=>{
    getSearch(params.search)
  },[params.search])

  return (
      <>
      <Grid>
        {data.map(recipe =>{
          return (
            <Card key={recipe.id}>
                <img src={recipe.image} alt={recipe.title}></img>
                <h4>{recipe.title}</h4>
                <Link to={`/recipe/${recipe.id}`}>View</Link>
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

import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export const Recipe = () => {
  
    const [data,setData] = useState([])
    const [activeTab,setActiveTab] = useState("instructions")
    let params = useParams()

  const getRecipe= async(id) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_MY_API_KEY }`)
    const recipes = await data.json()
    setData(recipes)
  }
  useEffect(()=>{
    getRecipe(params.id)
  },[params.id])

  return (
      <>
      <DetailWrapper>
            <div>
                <h2>{data.title}</h2>
                <img src={data.image} alt={data.title}></img>
            </div>
            <Info>
              <Button className={activeTab === 'instructions' ?  'active' :   ''}onClick={()=> setActiveTab('instructions')}>Instructions</Button>
              <Button  className={activeTab === 'ingredients' ?  'active' :   ''}onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            </Info>
            <div>
              {
                activeTab === "instructions" ?  
                <h3 dangerouslySetInnerHTML={{__html:data.summary}}></h3>
                :
                <ul>
                  {data.extendedIngredients.map(el => {
                    return (
                      <li key={el.id}>{el.original}</li>
                    )
                  })}
                </ul>
              }
            </div>
      </DetailWrapper>
      </>
  )
}


const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .active{
      background: linear-gradient(35deg,#494949,#313131);
      color:white;
    }

    h2{
      margin-bottom: 2rem;
      text-align: center;
    }
    h3{
      margin-bottom: 2rem;
      text-align: start;
    }
    li{
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
    ul{
      margin-top: 2rem;
    }



`;

const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  background: white;
  border:2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;
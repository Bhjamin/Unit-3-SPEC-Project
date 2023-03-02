import React from 'react'
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({picture, name, id}) => {

  const navigate= useNavigate()

  const handleClick = () => {
    navigate(`recipe/${id}`)
  }

  
  return (
    <div className='recipeCard'>
        <img className='recipeImg' src={picture} />
        <h2 className='recipeName'>{name}</h2>
        <button className='recipeBtn' onClick={handleClick}>See More</button>
    </div>
  )
}

export default RecipeCard
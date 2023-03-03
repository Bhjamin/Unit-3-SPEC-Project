import React from "react";
import "./DetailScreen.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailScreen = () => {

const [recipe, setRecipe] = useState({ingredients: []})

const { id } = useParams()



useEffect(() => {

axios.get(`https://recipes.devmountain.com/recipes/${id}`)
.then((res) => {
  setRecipe(res.data)
  console.log(res.data)
}).catch((err) => {
  console.log(err)
})

}, [])

useEffect(() => {

}, [recipe])

  return (
    <div>
      <section
        className="imgBanner"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)),
          url(${recipe.image_url})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className="big-text">{recipe.recipe_name}</h2>
      </section>
      <div className="mainContainer">
        <div className="ingredients">
          <div className="centerDiv">
          <h1>Recipe</h1>
          </div>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <div className="centerDiv">
          <h1>Ingredients</h1>
          </div>
          {   recipe.ingredients.map((obj) => {
            return <p className="ingred-text">{obj.quantity}  {obj.ingredient}</p>
          })   }
        </div>
        <div className="instructions">
        <div className="centerDiv">
          <h1>Instructions</h1>
        </div>
          <p>
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;

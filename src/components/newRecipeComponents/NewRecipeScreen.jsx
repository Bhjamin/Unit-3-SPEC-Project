import React from "react";
import "./NewRecipeScreen.css";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [newIngredient, setNewIngredient] = useState("");

  const [quantity, setQuantity] = useState(0);

  const [ingredients, setIngredients] = useState([]);

  const clickHandler1 = (e) => {
    e.preventDefault();
    let ingredient = {
      ingredient: `${newIngredient}`,
      amount: quantity,
    };
    setIngredients([...ingredients, ingredient]);
  };

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    axios.post("https://recipes.devmountain.com/recipes", values)
    .then((res) => {
      console.log('Man I do be loving some coding')
    }).catch((err) => {console.log(err)})

  }

  return (
    <section className="form-section">
      <h1 className="top-text">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>

    {({values, handleChange, handleSubmit}) => {
      return <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="section1">
          <input className="input" type="text" placeholder="Name" value={values.recipeName} onChange={handleChange} name='recipeName' />
          <input className="input" type="text" placeholder="Image URL" value={values.imageURL} onChange={handleChange} name='imageURL' />
        </div>
        <div className="section2">
          <input
            className="radio"
            type="radio"
            name="type"
            value="Cook"
            id="cook"
            onChange={handleChange}
          />
          <label htmlFor="cook">Cook</label>
          <input
            className="radio"
            type="radio"
            name="type"
            value="Bake"
            id="bake"
            onChange={handleChange}
          />
          <label htmlFor="bake">Bake</label>
          <input
            className="radio"
            type="radio"
            name="type"
            value="Drink"
            id="drink"
            onChange={handleChange}
          />
          <label htmlFor="drink">Drink</label>
        </div>
        <div className="section3">
          <input
            type="text"
            className="input"
            id="smol-input"
            placeholder="Prep Time"
            value={values.prepTime} onChange={handleChange} name='prepTime'
          ></input>
          <input
            type="text"
            className="input"
            id="smol-input"
            placeholder="Cook Time"
            value={values.cookTime} onChange={handleChange} name='cookTime'
          ></input>
          <input
            type="number"
            className="input"
            id="smol-input"
            placeholder="Serves"
            value={values.serves} onChange={handleChange} name='serves'
          ></input>
        </div>
        <br></br>
        <div className="section4">
          <div className="separater">
            <div className="ingredient-form">
              <input
                type="text"
                className="input"
                placeholder="Ingredient"
                onChange={(e) => {
                  setNewIngredient(e.target.value);
                }}
              ></input>
              <input
                type="number"
                min="0"
                className="input"
                placeholder="Quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              ></input>
            </div>
            <div className="ingredient-preview">
              {ingredients.map((obj, index) => {
                return (
                  <p key={index}>
                    {obj.amount} - {obj.ingredient}
                  </p>
                );
              })}
            </div>
          </div>
          <button className="ingredient-btn" onClick={clickHandler1}>
            Add Ingredient
          </button>
        </div>
        <div className="section5">
          <textarea className="text-area" placeholder="Instructions" value={values.instructions} onChange={handleChange} name='instructions'></textarea>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

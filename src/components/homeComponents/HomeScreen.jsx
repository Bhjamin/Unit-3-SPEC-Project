import React from "react";
import AdBanner from "./AdBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <div className="searchContainer">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
          type="text"
          placeholder="Search for a Recipe"
        />
      </div>
      <section className="recipeCardSection">
        {search === ""
          ? recipes.map((recipe) => {
              return (
                <RecipeCard
                  picture={recipe.image_url}
                  name={recipe.recipe_name}
                  key={recipe.recipe_id}
                  id={recipe.recipe_id}
                />
              );
            })
          : recipes
              .filter((recipe) =>
                recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((recipe) => {
                return (
                  <RecipeCard
                    picture={recipe.image_url}
                    name={recipe.recipe_name}
                    key={recipe.recipe_id}
                    id={recipe.recipe_id}
                  />
                );
              })}
      </section>
    </div>
  );
};

export default HomeScreen;

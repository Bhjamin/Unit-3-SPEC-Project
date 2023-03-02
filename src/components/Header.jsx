import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <h2 className="name">Devmountain Eatery</h2>
      <section className="btn-container">
        <NavLink to='/'>
          <button className="nav-btn">Home</button>
        </NavLink>
        <NavLink to='/newRecipe'>
          <button className="nav-btn">Add Recipe</button>
        </NavLink>
      </section>
    </header>
  );
};

export default Header;

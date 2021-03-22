import React from "react";
import { item, recipes, images } from "./recipes.module.scss";

const Recipes = ({ label, calories, image, ingredients }) => {
  return (
    <div className={recipes}>
      <h2> {label} </h2>

      <ul>
        {ingredients.map(({ text }) => (
          <li className={item} key={Math.random()}>
            {text}
          </li>
        ))}
      </ul>
      <div>
        <p className={calories}> Calories: {calories.toFixed(3)} </p>
        <img className={images} src={image} alt="Food image" />
      </div>
    </div>
  );
};

export default Recipes;

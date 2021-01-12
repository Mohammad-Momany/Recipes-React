import React from "react";
import { item, recipes, images } from "./recipes.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={recipes}>
      <h1>{title}</h1>
      {ingredients.map(({ text }) => (
        <li className={item}>{text}</li>
      ))}
      <p className={calories}> {calories}</p>
      <img className={images} src={image} alt="" />
    </div>
  );
};

export default Recipes;

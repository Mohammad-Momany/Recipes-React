import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { item, recipes, images } from "./recipes.module.scss";

const Recipes = ({ label, calories, image, ingredients }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={recipes} data-aos="fade-up">
      <h2>{label}</h2>
      <ul>
        {ingredients.map(({ text }) => (
          <li className={item} key={Math.random()}>
            {text}
          </li>
        ))}
      </ul>
      <div>
        <p className={calories}> Calories: {calories.toFixed(3)} </p>
        <img
          className={images}
          src={image}
          data-aos="fade-down"
          alt="Food image"
        />
      </div>
    </div>
  );
};

export default Recipes;

import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes";
import "./App.css";

const App = () => {
  const APP_ID = "2e53e717";
  const APP_KEY = "caaf15de806e15ac5b5d576d8d3c045f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const { hits } = await res.json();
    setRecipes(hits);
  };

  const updatrSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="Search-bar"
          type="text"
          value={search}
          onChange={updatrSearch}
        />
        <button className="Search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipe">
        {recipes.map(({ recipe }) => (
          <Recipes key={recipe.calories} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;

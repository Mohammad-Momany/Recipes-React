import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes";
import "./App.scss";

const App = () => {
  const APP_ID = "2e53e717";
  const APP_KEY = "caaf15de806e15ac5b5d576d8d3c045f";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Ice Cream");
  const URL = `https://api.edamam.com/search?q=${query}&from=0&to=12&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const { hits } = await (await fetch(URL)).json();
    setRecipes(hits);
    if (hits.length===0) {
      
      setQuery("Ice Cream");
    }
  };
  const getSearch = (e) => {
    e.preventDefault();
    if (search.length > 1) {
      
      setQuery(search);
      setSearch("");
    }
  };
  

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" type="submit">
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

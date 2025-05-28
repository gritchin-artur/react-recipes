import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";
import "./RecipesList.css";

export const RecipesList = ({ recipes, className }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [idFavorite, setIdFavorite] = useState(() => {
    const saved = localStorage.getItem("idFavorite");
    return saved ? JSON.parse(saved) : { ids: [], favoriteRecipes: [] };
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("idFavorite", JSON.stringify(idFavorite));
    }, 1000);
  }, [idFavorite]);

  const handleFavorite = () => {
    setIsFavorite((prev) => (prev ? false : true));
  };

  const newRecipes =
    isFavorite && idFavorite.ids.length > 0
      ? idFavorite.favoriteRecipes
      : recipes;
  console.log(idFavorite);
  return (
    <>
      {idFavorite.ids.length > 0 && (
        <button className="favorite-btn" onClick={() => handleFavorite()}>
          {!isFavorite ? "Favorite recipes" : "All recipes"}
        </button>
      )}
      <ul className={className}>
        {newRecipes.length > 0 &&
          newRecipes.map((recipe) => (
            <Recipe
              key={recipe.idMeal}
              recipe={recipe}
              setIdFavorite={setIdFavorite}
              idFavorite={idFavorite}
              className={`${className}-element`}
            />
          ))}
      </ul>
    </>
  );
};

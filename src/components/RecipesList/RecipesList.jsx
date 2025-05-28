import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";
import "./RecipesList.css";
import { GetRecipes } from "../../api/GetRecipes";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const RecipesList = ({ recipeName, className }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
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

  useEffect(() => {
    setLoad(true);
    GetRecipes(recipeName)
      .then((res) => {
        if (res) {
          setRecipes(res);
          setError("");
          setLoad(false);
        } else {
          setRecipes([]);
          setError("Not found");
          setLoad(false);
        }
      })
      .catch(() => {
        setError("Something went wrong");
        setLoad(false);
      });
  }, [recipeName]);

  const newRecipes =
    isFavorite && idFavorite.ids.length > 0
      ? idFavorite.favoriteRecipes
      : recipes;
  console.log(idFavorite);
  return (
    <>
      {load && <Loader />}
      {error && <ErrorMessage message={error} className="error" />}
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

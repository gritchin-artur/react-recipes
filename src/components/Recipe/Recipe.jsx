import toast from "react-hot-toast";
import { Hurt } from "../../assets/img/Hurt";
import "./Recipe.css";
import { YouTube } from "../../assets/img/YouTube";

export const Recipe = ({ recipe, idFavorite, setIdFavorite, className }) => {
  const handleClickToFavorite = (id, recipe) => {
    if (!id) return;
    setIdFavorite((prev) => {
      const ids = prev?.ids || [];
      const favoriteRecipes = prev?.favoriteRecipes || [];

      if (ids.includes(id)) {
        toast.error(`${recipe.strMeal} was removed from favorite`);
        return {
          ids: ids.filter((prevId) => prevId !== id),
          favoriteRecipes: favoriteRecipes.filter(
            (prevId) => prevId.idMeal !== id,
          ),
        };
      } else {
        toast.success(`${recipe.strMeal} was added to favorite`);
        return {
          ids: [...ids, id],
          favoriteRecipes: [...favoriteRecipes, recipe],
        };
      }
    });
  };

  const createArrHandler = (firstParam, secondParam, recipe) => {
    const newArr = {};

    for (let i = 1; i <= 20; i++) {
      const firstKey = `${firstParam}${i}`;
      const secondKey = `${secondParam}${i}`;

      const firstValue = recipe[firstKey];
      const secondValue = recipe[secondKey];

      if (firstValue && secondValue && firstValue.trim() !== "") {
        newArr[firstValue] = secondValue;
      }
    }

    return newArr;
  };

  const ingredients = Object.entries(
    createArrHandler("strIngredient", "strMeasure", recipe),
  )
    .map(([ingredient, measure]) => `${ingredient} (${measure})`)
    .join(", ");

  return (
    <li className={className}>
      <div>
        <h2 className={`${className}-meal`}>{`Meal name: ${
          recipe.strMeal || "Meal"
        }`}</h2>
        <img
          className={`${className}-img`}
          src={
            recipe.strMealThumb ||
            "https://media.gettyimages.com/id/1141797008/fr/vectoriel/couteau-de-table-et-fourchette-vecteur.jpg?s=1024x1024&w=gi&k=20&c=yGN-mwkjC9nluDoNXZJv3lv9S55pjsFYG4eUIS_h1jM="
          }
          alt={recipe.strMeal}
        />
        <h3 className={`${className}-category`}>{`Category name: ${
          recipe.strCategory || "Category"
        }`}</h3>
        <h3 className={`${className}-country`}>{`Country name: ${
          recipe.strArea || "Country"
        }`}</h3>
        <p className={`${className}-tags`}>{`Tags: ${
          recipe.strTags || "Category"
        }`}</p>
        <p className={`${className}-ingredients`}>{`Ingredients: ${
          ingredients || "Ingredients"
        }`}</p>
      </div>
      <div>
        <p className={`${className}-instruction`}>{`Instruction: ${
          recipe.strInstructions || "Instruction"
        }`}</p>
        <p className={`${className}-link`}>
          <a
            className={`${className}-youtube`}
            target="_blank"
            href={recipe.strYoutube}
          >
            <YouTube size="24" color="red" /> YouTube
          </a>
        </p>
        <button
          className={`${className}-favorite-btn`}
          onClick={() => handleClickToFavorite(recipe.idMeal, recipe)}
        >
          <Hurt
            color={
              idFavorite?.ids?.length > 0 &&
              idFavorite.ids.includes(recipe.idMeal)
                ? "red"
                : "green"
            }
            size="22"
          />
        </button>
      </div>
    </li>
  );
};

import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";

const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export default useRecipeContext;

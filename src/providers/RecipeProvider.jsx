import { useState } from "react";
import RecipeContext from "../context/RecipeContext";

const RecipeProvider = ({ children }) => {
  const [recipeName, setRecipeName] = useState("chicken");

  return (
    <RecipeContext.Provider value={{ recipeName, setRecipeName }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

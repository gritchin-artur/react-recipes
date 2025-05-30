import { useState } from "react";
import "./Form.css";
import useRecipeContext from "../../hooks/useRecipeContext";

export const Form = ({ className }) => {
  const [preValue, setPreValue] = useState("");
  const { setRecipeName } = useRecipeContext();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setRecipeName(value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, preValue)} className={className}>
      <input
        type="text"
        className={`${className}-input`}
        value={preValue}
        onChange={(e) => setPreValue(e.target.value)}
        placeholder="Search for a recipe..."
      />
      <button type="submit" className={`${className}-button`}>
        Search
      </button>
    </form>
  );
};

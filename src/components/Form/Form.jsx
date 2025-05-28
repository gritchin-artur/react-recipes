import { useState } from "react";
import "./Form.css";

export const Form = ({ handleSubmit, className }) => {
  const [preValue, setPreValue] = useState("");

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

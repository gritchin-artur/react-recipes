import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Title } from "./components/Title/Title";
import { Form } from "./components/Form/Form";
import { RecipesList } from "./components/RecipesList/RecipesList";

function App() {
  const [recipeName, setRecipeName] = useState("");
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setRecipeName(value);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Toaster position="top-right" />
      <div className="app-container">
        <div className="app-header">
          <Title title="🍽️ Find Your Recipe" className="title" />
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-toggle"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <Form handleSubmit={handleSubmit} className="form" />
        <RecipesList recipeName={recipeName} className="recipes" />
      </div>
    </div>
  );
}

export default App;

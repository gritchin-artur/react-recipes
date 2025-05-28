import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Title } from "./components/Title/Title";
import { Form } from "./components/Form/Form";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { RecipesList } from "./components/RecipesList/RecipesList";
import { GetRecipes } from "./api/GetRecipes";

function App() {
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [theme, setTheme] = useState("light");

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
        <RecipesList recipes={recipes} className="recipes" />
        {load && <Loader />}
        {error && <ErrorMessage message={error} className="error" />}
      </div>
    </div>
  );
}

export default App;

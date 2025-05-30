import "./App.css";
import { Toaster } from "react-hot-toast";
import { Title } from "./components/Title/Title";
import { Form } from "./components/Form/Form";
import { RecipesList } from "./components/RecipesList/RecipesList";
import RecipeProvider from "./providers/RecipeProvider";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";

function App() {
  return (
    <RecipeProvider>
      <div className="app">
        <Toaster position="top-right" />
        <div className="app-container">
          <div className="app-header">
            <Title title="🍽️ Find Your Recipe" className="title" />
            <ThemeButton />
          </div>
          <Form className="form" />
          <RecipesList className="recipes" />
        </div>
      </div>
    </RecipeProvider>
  );
}

export default App;

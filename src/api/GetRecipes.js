import axios from "axios";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export async function GetRecipes(query) {
  const response = await axios.get(
    `/search.php?s=${encodeURIComponent(query)}&limit=20`,
  );
  return response.data.meals;
}

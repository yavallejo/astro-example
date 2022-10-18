import dotenv from "dotenv";
dotenv.config();
const API_URL = process.env.WP_URL;

async function fetchAPI(slug) {
  const res = await fetch(`${API_URL}${slug}`);

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.meals;
}

export async function getAllItemsFood() {
  const data = await fetchAPI(`filter.php?c=Seafood`);
   return data;
}

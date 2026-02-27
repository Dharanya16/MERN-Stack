const express = require("express");
const cors = require("cors");
const recipes = require("./data/recipes.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Recipe API is Running 🔥");
});

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find(
    (r) => r.id === parseInt(req.params.id)
  );

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
});

app.put("/api/recipes/:id", (req, res) => {
  const recipeIndex = recipes.findIndex(
    (r) => r.id === parseInt(req.params.id)
  );

  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], ...req.body };
  res.json(recipes[recipeIndex]);
});

app.delete("/api/recipes/:id", (req, res) => {
  const recipeIndex = recipes.findIndex(
    (r) => r.id === parseInt(req.params.id)
  );  

  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  } 
  recipes.splice(recipeIndex, 1);
  res.json({ message: "Recipe deleted successfully" });
});

app.post("/api/recipes", (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    ...req.body,
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
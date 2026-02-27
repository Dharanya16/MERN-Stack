// server.js

const express = require("express");
const connectDB = require("./config/db");
const Recipe = require("./model/recipes");

const app = express();
app.use(express.json());

connectDB();

app.post("/recipes", async (req, res) => {

  try {
    const recipes = await Recipe.create(req.body);
    res.status(201).json(recipes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(ss);
});


app.get("/recipes/:id", async (req, res) => {
  const recipes  = await Recipe.findById(req.params.id);
  res.json(recipes);
});


app.put("/recipes/:id", async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});


app.delete("/recipes/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe Deleted" });
});

app.listen(3000, () => {
  console.log("🚀 Server Running on Port 3000");
});

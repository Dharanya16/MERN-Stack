import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  const getStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="details">
      <Link to="/" className="back-button">← Back</Link>

      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />

      <p>{getStars(recipe.rating)}</p>
      <p>Prep Time: {recipe.prepTime}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Difficulty: {recipe.difficulty}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
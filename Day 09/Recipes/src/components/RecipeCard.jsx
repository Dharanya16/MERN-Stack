import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const getStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={recipe.image} alt={recipe.title} />
        <div className="card-badge">{recipe.difficulty}</div>
      </div>
      <div className="card-content">
        <h3>{recipe.title}</h3>
        <div className="card-meta">
          <span>⏱️ {recipe.prepTime}</span>
          <span>🍽️ {recipe.servings}</span>
        </div>
        <div className="card-rating">
          <span className="stars">{getStars(recipe.rating)}</span>
          <span>({recipe.rating}/5)</span>
        </div>
        <p className="card-description">{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`}>View Recipe →</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
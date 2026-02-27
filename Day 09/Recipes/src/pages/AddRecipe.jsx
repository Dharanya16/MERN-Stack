import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    prepTime: "",
    servings: "",
    difficulty: "Easy",
    rating: "5",
    ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.image && formData.ingredients && formData.instructions) {
      alert("✅ Recipe added successfully!");
      setFormData({
        title: "",
        image: "",
        description: "",
        prepTime: "",
        servings: "",
        difficulty: "Easy",
        rating: "5",
        ingredients: "",
        instructions: "",
      });
      // In a real app, you'd send this to a backend
      // For now, just show success and redirect
      setTimeout(() => navigate("/"), 1500);
    } else {
      alert("❌ Please fill in all required fields");
    }
  };

  return (
    <div className="form-container">
      <h2>🍳 Add Your Own Recipe</h2>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
        Share your delicious recipe with the world!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Name *</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g., Pasta Carbonara"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL *</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/recipe.jpg"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief description of your recipe..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div className="form-group">
            <label htmlFor="prepTime">Prep Time</label>
            <input
              type="text"
              id="prepTime"
              name="prepTime"
              placeholder="e.g., 30 mins"
              value={formData.prepTime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input
              type="text"
              id="servings"
              name="servings"
              placeholder="e.g., 4 people"
              value={formData.servings}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty Level</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients * (one per line)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            placeholder="1 cup flour&#10;2 eggs&#10;1 cup milk"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            name="instructions"
            placeholder="Step-by-step cooking instructions..."
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">✨ Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
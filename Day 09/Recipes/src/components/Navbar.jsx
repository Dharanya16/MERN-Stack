import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>🍳 Recipe Hub</h2>
      </Link>
      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/add">➕ Add Recipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;
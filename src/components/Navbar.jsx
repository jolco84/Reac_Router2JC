import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">logo</a>
      </div>
      <NavLink to="/" className={setActiveClass}> Home </NavLink> |
      <NavLink to="/pokemones" className={setActiveClass}> Pokemones </NavLink>
    </nav>
  );
}

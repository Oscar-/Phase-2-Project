import { NavLink } from "react-router-dom";
import "./NavBar.css";

//navbar included
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/AddPlace">Add Spot</NavLink>
      <NavLink to="/Map">Show Map</NavLink>
    </nav>
    );
};

export default NavBar;

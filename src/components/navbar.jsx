import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li>
          <Link to="/" style={navItemStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={navItemStyle}>
            About me
          </Link>
        </li>
        <li>
          <Link to="/skills" style={navItemStyle}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" style={navItemStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/thanks" style={navItemStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  padding: "1rem",
  zIndex: 2,
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  margin: "15px",
  padding: 0,
};

const navItemStyle = {
  color: "white",
  cursor: "pointer",
  textDecoration: "none",
  fontWeight: "600", // Agrega grosor al texto
  letterSpacing: "1px", // Agrega espacio entre letras
};

export default Navbar;

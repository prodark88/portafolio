import React from "react";

const NavbarSlice = () => {
  return (
    <div style={navItemStyle}>
      <h4>Portfolio</h4>
    </div>
  );
};

const navItemStyle = {
  color: "white",
  cursor: "pointer",
  padding: "1rem",
  display: "flex", // Agregado para que justifyContent funcione
  alignItems: "flex-start", // Corregido "alingItems" a "alignItems"
  justifyContent: "flex-start",
  zIndex: 2,
  marginLeft:'3%'
};

export default NavbarSlice;

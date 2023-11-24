import React from "react";

const buttonPrimaryStyle = {
  backgroundColor: "#2AD87F",
  color: "#1d2125",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  width: "200px",
  marginRight: "10px",
  marginBottom: "20px",
  textDecoration: "none", // Nueva propiedad para quitar el subrayado
};

const buttonSecondaryStyle = {
  backgroundColor: "#1F252C",
  color: "white",
  border: "2px solid #2AD680",
  padding: "10px 20px",
  cursor: "pointer",
  width: "200px",
  marginRight: "10px",
  marginBottom: "20px",
  textDecoration: "none", // Nueva propiedad para quitar el subrayado
};

export const ButtonPrimary = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonPrimaryStyle}
    >
      {label}
    </a>
  );
};

export const ButtonSecondary = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonSecondaryStyle}
    >
      {label}
    </a>
  );
};

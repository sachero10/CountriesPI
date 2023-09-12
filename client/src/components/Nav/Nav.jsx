import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/activities">
        <button>Actividades Turísticas</button>
      </Link>
      <Link to="/form">
        <button>Crear Act. Turística</button>
      </Link>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/detail">
        <button>Buscar Countries</button>
      </Link>
      <Link to="/form">
        <button>Crear Actividad</button>
      </Link>
    </div>
  );
};

export default Nav;

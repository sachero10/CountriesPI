import style from "./Nav.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link className={style.link} to="/home">
        <button className={style.button}>Home</button>
      </Link>
      <Link to="/activities">
        <button className={style.button}>Ver Actividades Turísticas</button>
      </Link>
      <Link to="/form">
        <button className={style.button}>Crear Actividad Turística</button>
      </Link>
    </div>
  );
};

export default Nav;

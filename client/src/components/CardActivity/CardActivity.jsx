import style from "./CardActivity.module.css";

import React from "react";

const CardActivity = (props) => {
  const { id, name, difficulty, duration, season, Countries } = props;
  return (
    <div className={style.card}>
      <h2>Nombre: {name}</h2>
      <h3>Dificultad: {difficulty}</h3>
      <h3>Duración (hs): {duration}</h3>
      <h3>Temporada: {season}</h3>
      <div>
        <h3>País/es: </h3>
        <ul>
          <div>
            {" "}
            {Countries?.map((country, index) => (
              <li key={index}>
                {country.name} - Continente: {country.continent}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CardActivity;

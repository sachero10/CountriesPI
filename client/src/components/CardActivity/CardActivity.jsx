import React from "react";

const CardActivity = (props) => {
  const { id, name, difficulty, duration, season, Countries } = props;
  return (
    <div>
        <h3>Nombre: {name}</h3>
        <h4>Dificultad: {difficulty}</h4>
        <h4>Duración (hs): {duration}</h4>
        <h4>Temporada: {season}</h4>
        <div>
            <h3>País/es: </h3>
            <ul>
            <div> {Countries?.map((country, index) => (
                <li key={index}>{country.name} - Continente: {country.continent}</li>
            ))}</div>
            </ul>
        </div>
    </div>
  );
};

export default CardActivity;

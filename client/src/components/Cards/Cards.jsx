import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = ({ pagina, porPagina }) => {
  const allCountries = useSelector((state) => state.allCountries);

  return (
    <div>
      <div>
        {allCountries
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((country) => {
            return (
              <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Cards;

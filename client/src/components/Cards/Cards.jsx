import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = (props) => {
  const allCountries = useSelector((state) => state.allCountries);
  
  return (
    <div>
      <div>
        {allCountries
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

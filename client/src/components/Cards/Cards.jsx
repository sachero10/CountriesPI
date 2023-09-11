import React, { useState } from "react";
import Card from "../Card/Card";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getCountries } from "../../redux/actions";

const Cards = (props) => {
  const allCountries = useSelector((state) => state.allCountries);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, [dispatch]);

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

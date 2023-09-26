import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  orderCountries,
  orderCountriesByPopulation,
} from "../../redux/actions";

const Order = ({ allCountries }) => {
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    dispatch(orderCountries(e.target.value));
    console.log(allCountries);
  };

  const handleChangePopulation = (e) => {
    dispatch(orderCountriesByPopulation(e.target.value));
    console.log(allCountries);
  };

  // useEffect(() => {
  //   console.log(allCountries);
  // }, [dispatch]);

  return (
    <div>
      <fieldset>
        <legend align="left">Ordenar Países</legend>
        <fieldset>
          <legend>Por Nombre</legend>
          <div onChange={handleChangeName}>
            <input type="radio" id="asc" name="order" value="A" />
            <label htmlFor="asc">Ascendentemente</label>

            <input type="radio" id="desc" name="order" value="D" />
            <label htmlFor="desc">Descendentemente</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Por Poblacion</legend>
          <div onChange={handleChangePopulation}>
            <input type="radio" id="asc" name="order" value="AP" />
            <label htmlFor="asc">Ascendentemente</label>

            <input type="radio" id="desc" name="order" value="DP" />
            <label htmlFor="desc">Descendentemente</label>
          </div>
        </fieldset>
      </fieldset>
    </div>
  );
};

export default Order;

import React from "react";
import { useDispatch } from "react-redux";
import {
  orderCountries,
  orderCountriesByPopulation,
  getCountries
} from "../../redux/actions";

const Order = ({ allCountries }) => {
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    if (e.target.value.trim()) {
      dispatch(orderCountries(e.target.value));
      console.log(allCountries); //
    } else {
      dispatch(getCountries());
    }
  };

  const handleChangePopulation = (e) => {
    if (e.target.value.trim()) {
      dispatch(orderCountriesByPopulation(e.target.value));
      console.log(allCountries); //
    } else {
      dispatch(getCountries());
    }
  };

  return (
    <div>
      <fieldset>
        <legend align="left">Ordenar Países</legend>
        <fieldset>
          <legend>Por Nombre</legend>
          <div>
            <select onChange={handleChangeName}>
              <option value="">--------</option>
              <option value="AN">Ascendente</option>
              <option value="DN">Descendente</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Por Poblacion</legend>
          <div>
          <select onChange={handleChangePopulation}>
              <option value="">--------</option>
              <option value="AP">Ascendente</option>
              <option value="DP">Descendente</option>
            </select>
          </div>
        </fieldset>
      </fieldset>
    </div>
  );
};

export default Order;

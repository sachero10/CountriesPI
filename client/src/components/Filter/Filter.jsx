import React from "react";
import { useDispatch } from "react-redux";
import { filterByContinent, getCountries, cleanCountriesByName } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterByContinent = (e) => {
    if (e.target.value.trim()) {
      dispatch(filterByContinent(e.target.value));
    } else {
      dispatch(getCountries());
    }
    // console.log(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend align="left">Filtrar Países</legend>
        <fieldset>
          <legend>Por Continente</legend>
          <select onChange={handleFilterByContinent}>
            <option value="">-------</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
            <option value="Asia">Asia</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antártida</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Por Actividad</legend>
        </fieldset>
      </fieldset>
    </div>
  );
};
export default Filter;

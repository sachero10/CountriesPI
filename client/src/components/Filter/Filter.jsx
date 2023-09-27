import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterByContinent,
  getCountries,
  filterByActivities,
} from "../../redux/actions";


const Filter = ({ auxAct, setPagina, setInput }) => {
  // const [auxAct, setAuxAct] = useState([]);

  const dispatch = useDispatch();

  const handleFilterByContinent = (e) => {
    if (e.target.value.trim()) {
      dispatch(filterByContinent(e.target.value));
    } else {
      dispatch(getCountries());
    }
    setPagina(1);
    setInput(1);
    // console.log(e.target.value);
  };

  const handleFilterActivities = (e) => {
    if (e.target.value.trim()) {
      dispatch(filterByActivities(e.target.value));
    } else {
      dispatch(getCountries());
    }
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
          <select onChange={handleFilterActivities}>
            <option value="">--------</option>
            {auxAct.map((activity) => {
              return (
                <option value={activity.name} key={activity.id}>
                  {activity.name}
                </option>
              );
            })}
          </select>
        </fieldset>
      </fieldset>
    </div>
  );
};
export default Filter;

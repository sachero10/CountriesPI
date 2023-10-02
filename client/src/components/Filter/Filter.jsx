import style from "./Filter.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByContinent,
  getCountries,
  filterByActivities,
} from "../../redux/actions";

const Filter = ({ auxAct, setPagina, setInput }) => {
  const [continent, setContient] = useState("");
  const [activity, setActivity] = useState("");

  const dispatch = useDispatch();

  const handleFilterByContinent = (e) => {
    if (e.target.value.trim()) {
      setContient(e.target.value);
      dispatch(filterByContinent(e.target.value));
    } else {
      setContient("");
      dispatch(getCountries());
    }
    setActivity("");
    setPagina(1);
    setInput(1);
    // console.log(e.target.value);
  };

  const handleFilterActivities = (e) => {
    if (e.target.value.trim()) {
      setActivity(e.target.value);
      dispatch(filterByActivities(e.target.value));
    } else {
      setActivity("");
      dispatch(getCountries());
    }
    setContient("");
    setPagina(1);
    setInput(1);
  };

  return (
    <div className={style.filter}>
      <fieldset className={style.ffilter}>
        <legend>Filtrar Países</legend>
        <fieldset className={style.continent}>
          <legend>Por Continente</legend>
          <select
            value={continent}
            className={style.selectContinent}
            id="filterContinent"
            name="filterContinent"
            onChange={handleFilterByContinent}
          >
            <option value="">-------</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
            <option value="Asia">Asia</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antártida</option>
          </select>
        </fieldset>
        <fieldset className={style.activity}>
          <legend>Por Actividad</legend>
          <select
            value={activity}
            className={style.selectActivity}
            id="filterActivity"
            name="filterActivity"
            onChange={handleFilterActivities}
          >
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

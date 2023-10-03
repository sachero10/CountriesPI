import style from "./Order.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderCountries,
  orderCountriesByPopulation,
  getCountries,
} from "../../redux/actions";

const Order = ({ allCountries, setPagina, setInput }) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    if (e.target.value.trim()) {
      setName(e.target.value);
      dispatch(orderCountries(e.target.value));
      console.log(allCountries); //
    } else {
      setName("");
      dispatch(getCountries());
    }
    setPopulation("");
    setPagina(1);
    setInput(1);
  };

  const handleChangePopulation = (e) => {
    if (e.target.value.trim()) {
      setPopulation(e.target.value);
      dispatch(orderCountriesByPopulation(e.target.value));
      console.log(allCountries); //
    } else {
      setPopulation("");
      dispatch(getCountries());
    }
    setName("");
    setPagina(1);
    setInput(1);
  };

  return (
    <div className={style.order}>
      <fieldset className={style.forder}>
        <legend>Ordenar Países</legend>
        <fieldset className={style.name}>
          <legend>Por Nombre</legend>
          <div>
            <select
              value={name}
              className={style.selectName}
              id="orderName"
              name="orderName"
              onChange={handleChangeName}
            >
              <option value="">--------</option>
              <option value="AN">Ascendente</option>
              <option value="DN">Descendente</option>
            </select>
          </div>
        </fieldset>
        <fieldset className={style.population}>
          <legend>Por Población</legend>
          <div>
            <select
              value={population}
              className={style.selectPopulation}
              id="orderPopulation"
              name="orderPopulation"
              onChange={handleChangePopulation}
            >
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

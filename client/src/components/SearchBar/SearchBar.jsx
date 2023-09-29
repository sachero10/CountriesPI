import style from "./SearchBar.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value.trim()) {
      dispatch(getCountryByName(e.target.value));
    } else {
      dispatch(getCountries());
    }
  };

  return (
    <div className={style.SearchBar}>
      <input className={style.input}
        type="search"
        id="countryName"
        name="countryName"
        onChange={handleChange}
        placeholder="Buscar País..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;

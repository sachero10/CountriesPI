import React from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if(e.target.value.trim()) {
      dispatch(getCountryByName(e.target.value))
    } else {
      dispatch(getCountries());
    };
  };

  return (
    <div>
      <input type="search" id="countryName" name="countryName" onChange={handleChange} placeholder="Buscar País..."/>
    </div>
  );
};

export default SearchBar;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetail(id)); //cuando se monta el componente
    return () => {
      dispatch(cleanDetail()); //cuando se desmonta el componente
    };
  }, [id, dispatch]); //cuando se actualiza

  return (
    <div>
      {country ? (
            <>
              <h1>Country: {country.name}</h1>
              <h3>ID: {country.id}</h3>
              <img src={country.flag} alt="country detail" />
              <h3>Continent: {country.continent}</h3>
              <div>
                <h3>Capital (es): </h3>
                <ul>
                <div> {country.capital?.map((capital, index) => (
                  <li key={index}>{capital}</li>
                ))}</div>
                </ul>
              </div>
              <h4>Subregion: {country?.subregion}</h4>
              <h4>Area: {country?.area}</h4>
              <h4>Population: {country.population}</h4>
            </>
          ) : (
            <h3>Cargando...</h3>
          )}
    </div>
  );
};

export default Detail;

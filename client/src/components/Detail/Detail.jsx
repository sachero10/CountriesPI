import style from "./Detail.module.css";
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
  }, [id]); //cuando se actualiza

  return (
    <div className={style.detail}>
      {country ? (
        <>
          <h1 className={style.name}>Country: {country.name}</h1>
          <div className={style.info}>
            <h3 className={style.id}>ID: {country.id}</h3>
            <img
              className={style.flag}
              src={country.flag}
              alt="country detail"
            />
            <h3 className={style.continent}>Continent: {country.continent}</h3>
            <div className={style.divCapitals}>
              <h3 className={style.capitalName}>Capital (es): </h3>
              <ul>
                <div className={style.capitals}>
                  {" "}
                  {country.capital?.map((capital, index) => (
                    <li key={index}>{capital}</li>
                  ))}
                </div>
              </ul>
            </div>
            <h4 className={style.subregion}>Subregion: {country?.subregion}</h4>
            <h4 className={style.area}>Area: {country?.area}</h4>
            <h4 className={style.population}>
              Population: {country.population}
            </h4>
            <div className={style.divActivities}>
              <h3 className={style.activitiesName}>Actividades: </h3>
              <ul>
                <div className={style.activities}>
                  {" "}
                  {country.Activities?.map((activity, index) => (
                    <li key={index}>
                      {activity.name} - Temporada: {activity.season} -
                      Dificultad: {activity.difficulty} - Duración (hs):{" "}
                      {activity.duration}
                    </li>
                  ))}
                  {country.Activities?.length === 0 ? <h3 className={style.noActivities}>No hay Actividades Turísticas para el País</h3> : <p></p>}
                </div>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};

export default Detail;

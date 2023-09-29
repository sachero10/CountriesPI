import style from "./LandingPage.module.css";
import React, { useEffect } from "react"; //
import { useDispatch } from "react-redux"; //
import { Link } from "react-router-dom";
import { getCountries, getActivities } from "../../redux/actions"; //

const LandingPage = () => {
  const dispatch = useDispatch(); //

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, []); //

  return (
      <body className={style.landing}>
        <Link to="/home">
          <div className={style.wrapper}>
            <button className={style.button}>INGRESAR</button>
          </div>
        </Link>
      </body>
  );
};

export default LandingPage;

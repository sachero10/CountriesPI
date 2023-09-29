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
    <div>
      <body className={style.landing}>
        <Link to="/home">
          <button className={style.button}>INGRESAR</button>
        </Link>
      </body>
    </div>
  );
};

export default LandingPage;

// import React from "react";
import React, { useEffect } from "react";//
import { useDispatch } from "react-redux";//
import { Link } from "react-router-dom";
import { getCountries, getActivities } from "../../redux/actions";//


const LandingPage = () => {
  const dispatch = useDispatch();//

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, []); //

  return (
    <div>
      <h1>API COUNTRIES</h1>
      <Link to="/home">
        <button>Entrar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
import style from "./Activities.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions";
import CardsActivities from "../CardsActivities/CardsActivities";

const Activities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div className={style.activities}>
      <h1 className={style.titulo}>ACTIVIDADES</h1>
      <CardsActivities />
    </div>
  );
};

export default Activities;

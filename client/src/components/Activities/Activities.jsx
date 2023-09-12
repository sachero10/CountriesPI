import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions";
import CardsActivities from "../CardsActivities/CardsActivities";

const Activities = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities());
    }, [])

  return (
    <div>
      <h1>ACTIVIDADES</h1>
      <CardsActivities />
    </div>
  );
};

export default Activities;
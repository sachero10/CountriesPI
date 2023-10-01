import style from "./CardsActivities.module.css";
import React, { useState } from "react";
import CardActivity from "../CardActivity/CardActivity";
import { useSelector } from "react-redux";

const CardsActivities = (props) => {
  const activities = useSelector((state) => state.activities);

  return (
    <div>
      <div className={style.cards}>
        {activities.map((activity) => {
          return (
            <CardActivity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              difficulty={activity.difficulty}
              duration={activity.duration}
              season={activity.season}
              Countries={activity.Countries}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsActivities;

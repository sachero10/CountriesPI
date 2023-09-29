import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, flag, continent } = props;
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/detail/${id}`}>
        <div>
          <h3 className={style.name}>{name}</h3>
          <img className={style.flag} src={flag} alt="bandera" />
          <h4 className={style.continent}>{continent}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;

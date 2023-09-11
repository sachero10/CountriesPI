import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, flag, continent } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <h3>{name}</h3>
          <img src={flag} alt="bandera" />
          <h4>{continent}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;

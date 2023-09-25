import React from "react";
import { useDispatch } from "react-redux";
import { orderCountries, getCountries } from "../../redux/actions";

const Order = ({allCountries}) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(orderCountries(e.target.value));
    console.log(allCountries);
  };

  return (
    <div>
      <fieldset>
        <legend>Ordenar Países</legend>
        <div onChange={handleChange}>
          <input type="radio" id="asc" name="order" value="A" />
          <label htmlFor="asc">Ascendentemente</label>

          <input type="radio" id="desc" name="order" value="D" />
          <label htmlFor="desc">Descendentemente</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Order;

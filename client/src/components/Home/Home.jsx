import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Cards from "../Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [])

  return (
    <div>
      <h1>PAISES</h1>
      <Cards />
    </div>
  );
};

export default Home;
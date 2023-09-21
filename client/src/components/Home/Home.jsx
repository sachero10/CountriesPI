import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const [pagina, setPagina] = useState(1); //pag actual
  const [porPagina, setPorPagina] = useState(10); //cant de paises p/pag

  const maximo = Math.ceil(allCountries.length / porPagina); //cant de pags

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
      <h1>PAISES</h1>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <Cards pagina={pagina} porPagina={porPagina} />
    </div>
  );
};

export default Home;

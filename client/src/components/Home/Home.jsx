import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const [pagina, setPagina] = useState(1); //pag actual
  const porPagina = 10; //cant de paises p/pag

  const maximo = Math.ceil(allCountries.length / porPagina); //cant de pags

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <Order allCountries={allCountries}/>
      {allCountries.length===0 ? <h3>No Existe el País...</h3> : <p></p>}
      <h1>PAISES</h1>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <Cards pagina={pagina} porPagina={porPagina} />
    </div>
  );
};

export default Home;

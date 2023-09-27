import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const auxActivities = useSelector((state) => state.auxActivities);

  const dispatch = useDispatch();

  const [auxAct, setAuxAct] = useState(auxActivities);
  const [pagina, setPagina] = useState(1); //pag actual
  const porPagina = 10; //cant de paises p/pag
  const maximo = Math.ceil(allCountries.length / porPagina); //cant de pags

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    setAuxAct(auxActivities);
    console.log(auxAct);
  }, []);

  return (
    <div>
      <SearchBar />
      <Order allCountries={allCountries} />
      <Filter auxAct={auxAct} />
      <h1>PAISES</h1>
      {allCountries.length === 0 ? <h3>No Existe el País...</h3> : <p></p>}
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <Cards pagina={pagina} porPagina={porPagina} />
    </div>
  );
};

export default Home;

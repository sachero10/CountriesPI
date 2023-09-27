import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const auxActivities = useSelector((state) => state.auxActivities);

  const [auxAct, setAuxAct] = useState(auxActivities);
  const [pagina, setPagina] = useState(1); //pag actual
  const [input, setInput] = useState(1); //Entrada-Pag Actual
  const porPagina = 10; //cant de paises p/pag
  const maximo = Math.ceil(allCountries.length / porPagina); //cant de pags

  useEffect(() => {
    setAuxAct(auxActivities);
  }, []);

  return (
    <div>
      <SearchBar />
      <Order allCountries={allCountries} />
      <Filter auxAct={auxAct} setPagina={setPagina} setInput={setInput} />
      <h1>PAISES</h1>
      {allCountries.length === 0 ? <h3>No Existe el País...</h3> : <p></p>}
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} input={input} setInput={setInput}/>
      <Cards pagina={pagina} porPagina={porPagina} />
    </div>
  );
};

export default Home;

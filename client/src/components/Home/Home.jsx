import style from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import { getCountries, getActivities } from "../../redux/actions"; //

const Home = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);
  const auxActivities = useSelector((state) => state.auxActivities);

  const [auxAct, setAuxAct] = useState(auxActivities);
  const [pagina, setPagina] = useState(1); //pag actual
  const [input, setInput] = useState(1); //Entrada-Pag Actual
  const porPagina = 10; //cant de paises p/pag
  const maximo = Math.ceil(allCountries.length / porPagina); //cant de pags

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    setAuxAct(auxActivities);
    console.log(auxActivities);
  }, [dispatch]);

  return (
    <div className={style.home}>
      <div className={style.inputs}>
        <SearchBar />
        <Order allCountries={allCountries} />
        <Filter auxAct={auxAct} setPagina={setPagina} setInput={setInput} />
      </div>
      <br />
      <br />
      <h1 className={style.titulo}>PAÍSES</h1>
      <br />
      <br />
      {allCountries.length === 0 ? <h3 className={style.NoExiste}>No Existe el País...</h3> : <p></p>}
      <Pagination
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
        input={input}
        setInput={setInput}
      />
      <Cards pagina={pagina} porPagina={porPagina} />
    </div>
  );
};

export default Home;

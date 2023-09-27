import React, { useState } from "react";

const Pagination = ({ pagina, setPagina, maximo, input, setInput }) => {
  // const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      //tecla "Enter"
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > maximo ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <button disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
        Anterior
      </button>
      <input
        type="number"
        min={1}
        max={maximo}
        onChange={onChange}
        onKeyDown={onKeyDown}
        name="page"
        autoComplete="off"
        value={input}
        size={1}
      />
      <b> de {maximo} </b>
      <button
        disabled={pagina === maximo || pagina > maximo}
        onClick={nextPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;

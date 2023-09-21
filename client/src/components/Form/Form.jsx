import React from "react";
import { useForm } from "./useForm";
import styles from "./Form.module.css";

const initialForm = {
  name: "",
  difficulty: "",
  duration: "",
  season: "",
  country: [],
};

const validationsForm = (form, countries, country) => {
  let errors = {}; //Objeto donde se van a ir cargando los errores de c/campo
  //Expresiones Regulares
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexDifficulty = /^[1-5]{1}$/;
  const regDurationHs=/^([0-9]|0[0-9]|1[0-9]|2[0-4])$/;

  if (!form.name.trim()) {
    //para eliminar los espacios en blanco en ambos extremos
    errors.name = `El campo "Nombre" no puede estar vacío`;
  } else if (!regexName.test(form.name.trim())) {
    errors.name = `El campo "Nombre" sólo acepta letras y espacios en blanco`;
  }

  if (!form.difficulty.trim()) {
    errors.difficulty = `El campo "Dificultad" no puede estar vacío`;
  } else if (!regexDifficulty.test(form.difficulty.trim())) {
    errors.difficulty = `El campo "Dificultad" sólo acepta un número del 1 al 5`;
  }

  if(!regDurationHs.test(form.duration.trim())) errors.duration = `El campo "Duración" acepta valores del 0 al 24`

  if (!form.season) {
    errors.season = `Debe Seleccionar una opción válida para la Temporada`;
  }

  if (!country.trim()) {
    errors.country = `El campo "País" no puede estar vacío`;
  }

  return errors;
};

const Form = () => {
  const {
    form,
    countries,
    country,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    addArray,
    addCountry,
    removeCountries,
    handleCountry,
    handleBlurCountry,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h1>Actividad Turística</h1>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <fieldset>
          <legend align="left">Crear Actividad Turística</legend>
          <div>
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required //
              onBlur={handleBlur} //cuando el elemento pierde el foco
            />
            <br />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <br />
          <div>
            <label htmlFor="difficulty">Dificultad (1-5): </label>
            <input
              type="number"
              id="difficulty"
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              required //
              onBlur={handleBlur}
            />
            <br />
            {errors.difficulty && <span>{errors.difficulty}</span>}
          </div>
          <br />
          <div>
            <label htmlFor="duration">Duración (hs): </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            {errors.duration && <span>{errors.duration}</span>}
          </div>
          <br />
          <div>
            <label htmlFor="season">Temporada: </label>
            <select
              name="season"
              onChange={handleChange}
              required
              onBlur={handleBlur}
            >
              <option value="">- - -</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            <br />
            {errors.season && <span>{errors.season}</span>}
          </div>
          <br />
          <br />
          <div>
            <fieldset>
              <legend align="left">
                Buscar el/los país/es para la Actividad
              </legend>
              <br />
              <label htmlFor="country">País: </label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={handleCountry}
                required //
                onBlur={handleBlurCountry}
              />
              <br />
              {errors.country && <span>{errors.country}</span>}
              <br />
              <br />
              <button onClick={addCountry}>Buscar y Agregar</button>
              <hr />
              {<h4>País/es seleccionado/s:</h4>}
              <ul>
                {countries.map((country, index) => (
                  <li key={index}>{country}</li>
                ))}
              </ul>
              <br />
              <button onClick={addArray}>Confirmar País/es</button>
              <button onClick={removeCountries}>Eliminar Seleccion</button>
            </fieldset>
          </div>
          {/* {console.log(countries)} */}
          <br />
          <br />
          <input type="submit" value="CREAR ACTIVIDAD" />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;

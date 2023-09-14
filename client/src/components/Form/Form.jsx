import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const createActivity = async (dataForm) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/countries",
        dataForm
      );
      console.log(data);
    } catch (error) {
      // const { data } = response;
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleArray = (e) => {
  //   setForm({
  //     ...form,
  //     country: [...country, e.target.value],
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createActivity(form);
    alert("Actividad Creada");
  };

  return (
    <div>
      <h1>Actividad Turística</h1>
      <form onSubmit={handleSubmit} noValidate>
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
            />
          </div>
          <div>
            <label htmlFor="difficulty">Dificultad (1-5): </label>
            <input
              type="number"
              id="difficulty"
              name="difficulty"
              min="1"
              max="5"
              value={form.difficulty}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="duration">Duración (hs): </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="season">Temporada: </label>
            <select name="season" onChange={handleChange}>
              <option value="">- - -</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
          </div>
          <div>
            <label htmlFor="country">Pais: </label>
            <input
              type="text"
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </div>
          {/* <button type="submit">CREAR</button> */}
          <input type="submit" value="CREAR" />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;

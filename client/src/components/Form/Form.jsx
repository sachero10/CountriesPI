import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const createActivity = async () => {};

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Actividad Creada");
    createActivity(form);
  };

  return (
    <div>
      <h1>Actividad Turística</h1>
      <form onSubmit={handleSubmit} noValidate></form>
      <fieldset>
        <legend align="left">Crear Actividad Turística</legend>
        <div>
          <label htmlFor="name">Nombre </label>
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
        <button type="submit">CREAR</button>
      </fieldset>
    </div>
  );
};

export default Form;

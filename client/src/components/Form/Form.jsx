import React, {useState} from "react";

const Form = () => {
    const [form, setForm] = useState({});

    const createActivity = async () => {}

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
            <form onSubmit="handleSubmit" noValidate></form>
            <fieldset>
                <legend>Crear Actividad Turística</legend>
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
            </fieldset>
        </div>
    );
};

export default Form;
import { useState } from "react";
import axios from "axios";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      // [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    //manejador del enfoque del cursor
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    createActivity(form);
    alert("Actividad Creada");
  };

  const createActivity = async (dataForm) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/countries",
        dataForm
      );
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const addArray = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      country: countries,
    });
  };

  const addCountry = (e) => {
    e.preventDefault();
    setCountries([...countries, country]);
  };

  const removeCountries = (e) => {
    e.preventDefault();
    setCountries([]);
  };

  return {
    form,
    countries,
    country,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    addArray,
    addCountry,
    removeCountries,
    setCountry,
  };
};

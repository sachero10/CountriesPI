import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, cleanCountriesByName } from "../../redux/actions";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const dispatch = useDispatch();
  const countriesByName = useSelector((state) => state.countriesByName);

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
    setForm ({});
  };

  const addArray = (e) => {
    e.preventDefault();
    const countriesSet = new Set(countries); //para eliminar los repetidos
    const countriesResult = [...countriesSet]; //lo convierto a un Array nuevamente
    setCountries([countriesResult]);
    setForm({
      ...form,
      country: countriesResult,
    });
  };

  const addCountry = (e) => {
    e.preventDefault();
    dispatch(getCountryByName(country));
    const found = countriesByName.find((pais) => pais.name.toUpperCase() == country.toUpperCase());
    if (found) {
        setCountries([...countries, found.name]);
    } else {
        alert(`El país ${country} no existe`);
    }
    dispatch(cleanCountriesByName());
  };

  const removeCountries = (e) => {
    e.preventDefault();
    setCountries([]);
    setCountry("");
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

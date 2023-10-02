import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, cleanCountriesByName } from "../../redux/actions";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      // [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    dispatch(getCountryByName(country));
  };

  const handleBlur = (e) => {
    //manejador del enfoque del cursor
    handleChange(e);
    setErrors(validateForm(form, countries, country));
  };

  const handleBlurCountry = (e) => {
    //manejador del enfoque del cursor
    handleCountry(e);
    setErrors(validateForm(form, countries, country));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form, countries, country));
    if (Object.keys(errors).length === 0) {
      //devuelve un arreglo con las propiedades del objeto
      createActivity(form);
      alert("Actividad Creada");
      setForm(initialForm); //para limpiar el formulario
      setCountry("");
      setCountries([]);
    } else {
      alert("Error al Enviar el Formulario");
      return;
    }
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
    const countriesSet = new Set(countries); //para eliminar los repetidos
    const countriesResult = [...countriesSet]; //lo convierto a un Array nuevamente
    setCountries(countriesResult);
    setForm({
      ...form,
      country: countriesResult,
    });
    alert(`PAÍSES CONFIRMADOS`);
  };

  const addCountry = (e) => {
    e.preventDefault();
    // dispatch(getCountryByName(country));
    const found = allCountries.find(
      (pais) => pais.name.toUpperCase() == country.toUpperCase()
    ); //devuelve el valor del primer elemento del array que coincida con el nombre ingresado
    if (found) {
      setCountries([...countries, found.name]);
    } else {
      alert(`El país ${country} no existe`);
    }
    // setCountry(""); //limpio el estado local
    dispatch(cleanCountriesByName()); //limpio el estado global
  };

  const removeCountries = (e) => {
    e.preventDefault();
    setCountries([]);
    setCountry("");
    setForm({
      ...form,
      country: [],
    });
  };

  return {
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
  };
};

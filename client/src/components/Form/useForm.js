import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            // [e.target.name]: e.target.value,
            [name]: value,
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {}

    return {
        form, countries, country, errors, loading, response, handleChange, handleBlur, handleSubmit,
    }
} 
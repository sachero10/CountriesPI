import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [country, setCountry] = useState("");
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} value={country} />
      <button
        onClick={() => {
          onSearch(country);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;

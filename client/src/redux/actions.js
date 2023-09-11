import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
// export const GET_DIETS = "GET_DIETS";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getCountries = () => {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/countries");
    return dispatch({ type: GET_COUNTRIES, payload: data });
  };
};

export const getCountryDetail = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({ type: GET_COUNTRY_DETAIL, payload: data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// export const getDiets = () => {
//   return function (dispatch) {
//     fetch("http://localhost:3001/diets")
//       .then((response) => response.json())
//       .then((data) =>
//         dispatch({ type: GET_RECIPES, payload: data.map((diet) => diet.name) })
//       );
//   };
// };

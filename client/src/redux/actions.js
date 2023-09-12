import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
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

export const getActivities = () => {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/activities");
    return dispatch({ type: GET_ACTIVITIES, payload: data });
  };
};

import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const CLEAN_COUNTRIES_BY_NAME = "CLEAN_COUNTRIES_BY_NAME";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";

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

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const { data } = await axios(
      `http://localhost:3001/countries?countryName=${name}`
    );
    return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data });
  };
};

export const cleanCountriesByName = () => {
  return { type: CLEAN_COUNTRIES_BY_NAME };
};

export const orderCountries = (orderC) => {
  return function (dispatch) {
    return dispatch({
      type: ORDER_COUNTRIES,
      payload: orderC,
    });
  };
};

export const orderCountriesByPopulation = (orderP) => {
  return function (dispatch) {
    return dispatch({
      type: ORDER_POPULATION,
      payload: orderP,
    });
  };
};

export const filterByContinent = (continent) => {
  return function (dispatch) {
    return dispatch({
      type: FILTER_CONTINENT,
      payload: continent,
    });
  };
};

export const filterByActivities = (activity) => {
  return function (dispatch) {
    return dispatch({
      type: FILTER_ACTIVITIES,
      payload: activity,
    });
  };
};

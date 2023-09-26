import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  CLEAN_DETAIL,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  CLEAN_COUNTRIES_BY_NAME,
  ORDER_COUNTRIES,
  ORDER_POPULATION,
  FILTER_CONTINENT,
} from "./actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  activities: [],
  aux: [],
  // countriesByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, aux: action.payload, allCountries: action.payload };

    case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, countryDetail: {} };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case GET_COUNTRY_BY_NAME:
      // return {...state, countriesByName: action.payload};
      return { ...state, allCountries: action.payload };

    case CLEAN_COUNTRIES_BY_NAME:
      // return { ...state, countriesByName: [] };
      return { ...state, allCountries: [] };

    case ORDER_COUNTRIES:
      let copy1 = state.allCountries.sort((a, b) => {
        if (action.payload === "AN") {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }
      });
      return { ...state, allCountries: copy1 };

    case ORDER_POPULATION:
      let copy2 = state.allCountries.sort((a, b) => {
        return action.payload === "AP"
          ? a.population - b.population
          : b.population - a.population;
      });
      return { ...state, allCountries: copy2 };

    case FILTER_CONTINENT:
      let copy3 = state.aux.filter((country) => {
        return country.continent === action.payload;
      });
      return { ...state, allCountries: copy3 };

    default:
      return { ...state };
  }
};

export default rootReducer;

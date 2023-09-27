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
  FILTER_ACTIVITIES,
} from "./actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  activities: [],
  auxCountries: [],
  auxActivities: [],
  // countriesByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        auxCountries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, countryDetail: {} };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        auxActivities: action.payload,
      };

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
      let copy3 = state.auxCountries.filter((country) => {
        return country.continent === action.payload;
      });
      return { ...state, allCountries: copy3 };

    case FILTER_ACTIVITIES:
      let copy4 = state.auxActivities.filter((activity) => {
        return activity.name === action.payload;
      });
      console.log(copy4);
      return { ...state, activities: copy4 };

    default:
      return { ...state };
  }
};

export default rootReducer;

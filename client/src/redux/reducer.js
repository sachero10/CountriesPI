import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  CLEAN_DETAIL,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  CLEAN_COUNTRIES_BY_NAME,
} from "./actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  activities: [],
  countriesByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };

    case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, countryDetail: {} };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case GET_COUNTRY_BY_NAME:
      return {...state, countriesByName: action.payload};
    
    case CLEAN_COUNTRIES_BY_NAME:
      return { ...state, countriesByName: [] };

    default:
      return { ...state };
  }
};

export default rootReducer;

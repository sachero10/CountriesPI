import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  CLEAN_DETAIL,
} from "./actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  // diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };

    case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, countryDetail: {} };

    // case GET_DIETS:
    //   return { ...state, diets: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;

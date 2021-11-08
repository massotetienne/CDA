/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  name: "",
  data: {},
};

/*
 * Reducers
 * ******** */
export function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_WEATHER_DATA:
      return { ...state, data: action.payload };
  }
}

/*
 * Getters
 * ******* */

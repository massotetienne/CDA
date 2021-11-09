/*
* React
* ***** */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


/*
* Reducers
* ****** */
import { MeteoReducers } from "./reducers/MeteoReducers";
import { CountryReducers } from './reducers/CountryReducers'
/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
    meteo: MeteoReducers,
    countries: CountryReducers
});
/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod

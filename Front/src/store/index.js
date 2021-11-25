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
import { CountryReducers } from './reducers/CountryReducers';
import { ArticleReducers} from './reducers/ArticleReducers';
/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
    meteo: MeteoReducers,
    countries: CountryReducers,
    article: ArticleReducers
});
/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod

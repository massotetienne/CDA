/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes";

// Selector (state)
const initialState = {
    ListCountries: {},
    
};

// Reducers
export function CountryReducers(state = initialState, action){
    switch (action.type) {
        
        case Actions.GET_COUNTRY:
            return {...state, ListCountries: action.payload}

        default:
            return state;
            
    }
}
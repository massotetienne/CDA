/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes";

// Selector (state)
const initialState = {
    listMeteo: [],
    
};

// Reducers
export function MeteoReducers(state = initialState, action){
    switch (action.type) {
        
        case Actions.GET_METEO_DAY:
            return {...state, listMeteo: action.payload}

        default:
            return state;
            
    }
}

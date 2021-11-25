/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes";

// Selector (state)
const initialState = {
    ListArticles: {},
    
};

// Reducers
export function ArticleReducers(state = initialState, action){
    switch (action.type) {
        
        case Actions.GET_ARTICLE:
            return {...state, ListArticles: action.payload}

        default:
            return state;
            
    }
}
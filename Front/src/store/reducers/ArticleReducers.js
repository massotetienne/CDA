/*
 * Import Actions {...}
 * ******************** */
import * as Actions from "../actions/ActionTypes";

// Selector (state)
const initialState = {
    flash: '',
    newsData: [],
    news: {
      name: "",
      text: "",
      date: "",
    }
  };

// Reducers
export function ArticleReducers(state = initialState, action){
    switch (action.type) {
        
        case Actions.GET_ARTICLE:
            return {...state, newsData: action.payload};
        case Actions.ADD_ARTICLE:
            return {...state, flash: action.payload };

        default:
            return state;
            
    }
}
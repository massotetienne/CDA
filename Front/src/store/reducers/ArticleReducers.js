/*
 * Import Actions {...}
 * ******************** */
import Article from "../../components/Article";
import * as Actions from "../actions/ActionTypes";

// Selector (state)
const initialState = {
    flash: '',
    newsData: [],
    dataArticle: (Article),
    news: {
        name: "",
        text: "",
        date: "",
    }
};

// Reducers
export function ArticleReducers(state = initialState, action) {
    switch (action.type) {

        case Actions.GET_ARTICLE:
            // console.log('GetArticleAction');
            return { ...state, newsData: action.payload };
        case Actions.POST_ARTICLE:
            return { ...state, newsData: action.payload };
        case Actions.PUT_ARTICLE:
            return { ...state, newsData: action.payload };
        case Actions.DELETE_ARTICLE:
            return { ...state, flash: action.payload.message, newsData: action.payload.newsData };
        default:
            return state;

    }
}
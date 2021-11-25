// ActionsArticle.js

// Import de module
import axios from "axios";
import { GET_ARTICLE } from './ActionTypes'

// Get ListCountry
export const getArticle = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3004/article/get")
            .then((res) => {
                console.log("Get art", res.data);
                dispatch({ type: GET_ARTICLE, payload: res.data })
            })
            .catch((err) => console.log(err));
    }

};
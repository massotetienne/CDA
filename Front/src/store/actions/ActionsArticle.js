// ActionsArticle.js

// Import de module
import axios from "axios";
import { GET_ARTICLE , ADD_ARTICLE } from './ActionTypes'

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
// Add Article
export const addArticle = (data) => {
    console.log('addArticle', data)
    return (dispatch) => {
      return axios
        .post("http://localhost:3004/article", data)
        .then((res) => {
          console.log("postArticle", res.data);
          dispatch({ type: ADD_ARTICLE, payload: res.data.message });
        })
        .catch((err) => console.log(err));
    };
  };

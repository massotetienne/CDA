// ActionsArticle.js

// Import de module
import axios from "axios";
import { GET_ARTICLE, POST_ARTICLE, PUT_ARTICLE, DELETE_ARTICLE } from './ActionTypes'

// Get Article
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
export const postArticle = (data) => {
  console.log('addArticle', data)
  return (dispatch) => {
    return axios
      .post("http://localhost:3004/article", data)
      .then((res) => {
        console.log("postArticle", res.data);
        dispatch({ type: POST_ARTICLE, payload: res.data.dbArticle });
      })
      .catch((err) => console.log(err));
  };
};

// UPDATE 
export const putArticle = (id, data) => {

  console.log('putArticle', data)
  return (dispatch) => {
    return axios
      .put(`http://localhost:3004/article/update/${id}`, data)
      .then((res) => {
        console.log("putArticle", res.data);
        dispatch({
          type: PUT_ARTICLE,
          payload: res.data.dbArticle
        });
      })
      .catch((err) => console.log(err));
  };
};

// DELETE ARTICLE 
export const delArticle = (id) => {
  console.log('actiondel', id);
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3004/article/delete/${id}`)
      .then((res) => {
        console.log("Delete Article", res.data.dbArticle)
        dispatch({
          type: DELETE_ARTICLE,
          payload: {message: res.data.message, newsData: res.data.dbArticle}
        })
        console.log("Delete Article dispatch", id)
      })
      .catch((err) => console.log(err));
  }

};
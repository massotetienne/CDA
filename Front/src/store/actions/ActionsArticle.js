// ActionsArticle.js

// Import de module
import axios from "axios";
import { GET_ARTICLE, POST_ARTICLE, PUT_ARTICLE, DELETE_ARTICLE } from './ActionTypes'

// Get Article
export const getArticle = () => {
  return (dispatch) => {
    return axios
      .get("http://192.168.1.70:3004/api/article/get")
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
      .post("http://192.168.1.70:3004/api/article", data)
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
      .put(`http://192.168.1.70:3004/api/article/update/${id}`, data)
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
      .delete(`http://192.168.1.70:3004/api/article/delete/${id}`)
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
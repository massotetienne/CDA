import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts = () => {
    return (dispatch)=> {
        return axios
        .get('http://localhost:3003/posts?_sort=id&_order=desc')
        .then((res)=> {
            dispatch({ type: GET_POSTS, payload: res.data});
        })
        .catch((err) => console.log(err));
    }
}
// ci dessus on crée la fonction getPosts qui va demander a axios 
// de get dans la DB .then(res) puis de rendre les data 
// et d'aller les stocker dans le store avec dispatch qui sera de type
//GET_POSTS , le payload  rendra les data .

export const addPosts = (data) => {
    return (dispatch)=> {
        return axios
        .post('http://localhost:3003/posts', data)
        .then((res)=> {
            dispatch({ type: ADD_POSTS, payload: data});
        })
        .catch((err) => console.log(err));
    }
}
// pareil que la fonction au dessus mais avec la méthone ADD_POSTS
// GET,POST,PUT,DELETE etc ...
// ici on n'a mis ADD a la place de POST pour que ce soit plus lisible 
// que POST_POSTS.
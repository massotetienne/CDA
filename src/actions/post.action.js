import axios from "axios";

export const GET_POSTS = "GET_POSTS";

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
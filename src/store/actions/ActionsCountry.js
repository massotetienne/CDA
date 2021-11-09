// ActionsCountry.js

// Import de module
import axios from "axios";
import { GET_COUNTRY } from './ActionTypes'

// Get ListCountry
export const getCountry = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3003/countries")
            .then((res) => {
                console.log("Get contry", res.data);
                dispatch({ type: GET_COUNTRY, payload: res.data })
            })
            .catch((err) => console.log(err));
    }

};
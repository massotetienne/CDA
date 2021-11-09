// ActionsMeteo.js

// Import de module
import axios from "axios";
import { GET_METEO_DAY } from './ActionTypes'

// Get ListMeteo
export const getMeteoDay = () => {

    return (dispatch) => {
        return axios
            .get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=10b3121d6186d24c5659a8de3b72557c")
            .then((res) => {
                console.log(res.data.list);
                dispatch({ type: GET_METEO_DAY, payload: res.data.list })
            })
            .catch((err) => console.log(err));
    }

};



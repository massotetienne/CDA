// ActionsMeteo.js

// Import de module
import axios from "axios";
/*
 * Import types { ... }
 * ******************** */
import { GET_METEO_DAY } from './ActionTypes'

/*
 * Actions
 * ******* */

// Get Weather
export const getMeteoDay = () => {
    return (dispatch) => {
      return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily", {
          params: {
            // q: country, units: "metric", lang: "fr",
            // appid: "2e58d66df105629dd3f639774eca25e7",
            appid: "32ee58ebca536764e3cda83854a4fe6e",
          },
  
        }).then((res) => {
          console.log("dawtaw", res.data);
          dispatch({ type: GET_METEO_DAY, payload: res.data });
  
        }).catch((err) => console.log(err));
    };
  };


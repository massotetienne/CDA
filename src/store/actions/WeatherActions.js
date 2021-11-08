// * Import - Module
// * *************** */

import axios from "axios";

/*
* Import types { ... }
* ******************** */

import { GET_WEATHER_DATA } from "./ActionTypes";

/*
* Actions
* ******* */

// Get Weather
export const getWeather = (country) => {
 return (dispatch) => {
   return axios.get("http://api.openweathermap.org/data/2.5/weather?", {
       params: {
         q: country, units: "metric", lang: "fr",
         // appid: "2e58d66df105629dd3f639774eca25e7",
         appid: "32ee58ebca536764e3cda83854a4fe6e",
       },

     }).then((res) => {
       console.log("DATA", country, res.data);
       dispatch({ type: GET_WEATHER_DATA, payload: res.data });

     }).catch((err) => console.log(err));
 };
};

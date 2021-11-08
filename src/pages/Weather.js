import React from "react";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { store } from "../store";
import { getWeather } from '../store/actions/WeatherActions'

const Weather = () => {
  const data = useSelector(state => state.weather.data);
  const select = ["Paris", "Dubai", "Londres"];

  function handleChangeSelect(e) {
    console.log("Selected!!", e.target.value);
    if (e.target.value.length > 0) store.dispatch(getWeather(e.target.value));
  }

  return (
    <div className="home">
      <Navigation />
      <div className="meteoDay">
        {/* On recupère l'event du select pas de l'option */}
        <select
          id="country"
          name="country"
          onChange={(e) => handleChangeSelect(e)}
        >
          {select.map((select) => {
            return (
              <option value={select} key={select}>
                {select}
              </option>
            );
          })}
        </select>

        {/* C'est une condition !!
            - https://reactjs.org/docs/conditional-rendering.html
        */}
        {data.weather && (
          <div className="CountryIndice" id={data.weather[0].main}>
            <li className="Pays">{data.name}</li>
            <li>{Math.round(data.main.temp)}Â°C</li>
            <li className="weatherDescr" key={data.weather[0].id}>
              {data.weather[0].description}
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import MeteoJour from '../components/MeteoJour';
import axios from 'axios'


const Meteo = () => {
    const [listMeteo, setListMeteo] = useState([]);

    const getMeteoDay = () => {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=10b3121d6186d24c5659a8de3b72557c")
        .then((res) => {
          console.log(res.data.list);
          setListMeteo(res.data.list);
        }).catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getMeteoDay();
    }, []);

    return (
        <div>
            <Logo/>
            <Navigation/>
           <h1>Meteo</h1> 
            {(listMeteo.length > 0) && listMeteo.map((item , index) => {
                console.log('test', item.weather[0].main)
                return <MeteoJour item={item} key={index}/>
            })}
        </div>
    );
};

export default Meteo;
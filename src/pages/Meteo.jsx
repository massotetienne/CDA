import React, { useEffect } from "react";
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
// import MeteoJour from '../components/MeteoJour';
// import axios from 'axios'
import { store } from "../store";

import { getMeteoDay } from '../store/actions/ActionsMeteo'
import { useSelector } from "react-redux";
import CardMeteo from "../components/CardMeteo";

const Meteo = () => {
  const listMeteo = useSelector(state => state.meteo.listMeteo)

  useEffect(() => {
    store.dispatch(getMeteoDay());
  }, []);

  console.log('data2', listMeteo);

  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Meteo</h1>
      <ul>
          <CardMeteo dataChild={listMeteo} key={listMeteo.dt} />
      </ul>
    </div>
  );
};

export default Meteo;
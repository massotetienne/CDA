import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setplayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selecetedRadio, setSelecetedRadio] = useState('');
    const radios = ['Africa', 'America', 'Asia', 'Oceania', 'Europe']

    useEffect(() => {
        if (playOnce) {
            axios
                .get(
                    "https://restcountries.com/v3.1/all"
                )

                .then((res) =>
                    setData(res.data));
            setplayOnce(false);
        }
        console.log(data);

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray)
        };
        sortedCountry();
    }, [data, rangeValue, playOnce]);


    return (
        <div className="countries">
            <div className="sort-container" >
                <input type="range" min="1" max="250" value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />
                <ul>
                    {radios.map((radio) => {
                        return (
                        <li key={radio}>
                            <input type="radio" value={radio} id={radio}
                                checked={radio === selecetedRadio} onChange={(e)=>
                                     setSelecetedRadio(e.target.value)} />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                        )
                    }
                    )}
                </ul>
            </div>
            <div className="cancel">
                {selecetedRadio && <h5 onClick= {() => setSelecetedRadio("")}>Annuler recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData
                .filter((country) => country.region.includes
                (selecetedRadio))
                .map((country, index) => (
                    <Card country={country} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;
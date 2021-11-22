
import React from 'react';

const Card = (props) => {
    const { country, index } = props;
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    console.log(props);
    

    return (

        <li className="card">
            <img key={index} src={country.flags.png} alt="flag" />
            <div className="data-container">
                <ul>
                    <li key={index}>{country.name.common}</li>
                    <li key={index}>{country.capital}</li>
                    <li key={index}>{country.continents}</li>
                    <li key={index}>Pop : {numberFormat(country.population)}</li>

                </ul>
            </div>

        </li>
    );
};

export default Card;
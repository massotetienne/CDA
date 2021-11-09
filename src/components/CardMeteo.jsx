
import React from 'react';

const CardMeteo = (props) => {
    const { item, index} = props;
    // console.log(props);
    

    return (

        <li className="card">
            <div className="data-container">
                <ul>
                    <li key={index}>{item.weather[0].icon}</li>
                    <li key={index}>{item.weather[0].main}</li>
                    <li key={index}>{item.wind.speed}</li>
                </ul>
            </div>
        </li>
    );
};

export default CardMeteo;
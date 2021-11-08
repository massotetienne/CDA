
import React from 'react';

const CardMeteo = (props) => {
    const { item, index } = props;

    console.log(props);


    return (
        <div className="data-container">
            
            <ul>
                <li>IMG : {item.weather[0].icon}</li>
                <li>Météo : {item.weather[0].main}</li>
                <li>Force du vent : {item.wind.speed}</li>
            </ul>
            
        </div>
    );
};

export default CardMeteo;
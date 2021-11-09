
import React from 'react';

const CardCountry = (props) => {
    console.log("gdfhdhfdhf", props);
    const { name, key1 } = props.kakawait;
    const { item, index} = props;
    // const { item, index} = props.item;
    
    return (
        <li className="card">
            <div className="data-container">
                <ul>
                    <li key={ key1 }>{ name } </li>
                    <li key={index}>{item.weather[0].main}</li>
                </ul>
            </div>
        </li>
    );
};

export default CardCountry;
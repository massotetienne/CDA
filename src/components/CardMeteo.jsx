
import React from 'react';

const CardMeteo = (props) => {
    const { dataChild, index } = props;

    console.log('jbkj', dataChild, index);
    
    return (

        <li className="card">
            <div className="data-container">
                <ul>
                    <li>
                       <p> pression:{(dataChild.current) && dataChild.current.pressure}</p> 
                       <p> humidity:{(dataChild.current) && dataChild.current.humidity}</p> 
                    </li>
                    
                </ul>
            </div>
        </li>
    );
};

export default CardMeteo;
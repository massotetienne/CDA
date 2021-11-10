
import React from 'react';

const CardMeteo = (props) => {
    const { dataChild, index } = props;

    console.log('jbkj', dataChild, index);
    
    return (

        <li className="card">
            <div className="data-container">
                <ul>
                    <li>
                        {(dataChild.current) && dataChild.current.dt}
                    </li>
                    
                </ul>
            </div>
        </li>
    );
};

export default CardMeteo;
import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Notfound = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
           <h1>Erreur 404</h1> 
        </div>
    );
};

export default Notfound;
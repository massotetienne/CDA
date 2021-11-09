import  Card from '../components/Card';
import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
        <div>
          <Navigation/>
            <h1>Welcome Home</h1>
            <Card/>
        </div>
    )
}

export default Home;

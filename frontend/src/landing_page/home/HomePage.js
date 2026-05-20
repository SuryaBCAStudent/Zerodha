import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <div className="home-page">
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </div>
    );
}

export default HomePage;
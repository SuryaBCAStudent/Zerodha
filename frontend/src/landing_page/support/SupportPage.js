import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function Support() {
    return (
        <div className="support-page">
            
            <Hero />
            <CreateTicket />
            
        </div>
    );
}

export default Support;
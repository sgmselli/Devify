import React from 'react';

import './TutoringProfile.css';

function TutoringProfile() {

    const today = new Date()
        .toISOString()
        .split('T')[0];
    const fortnightAway = new Date(Date.now() + 12096e5)
        .toISOString()
        .split('T')[0];

    return (
        <div className='TutoringProfile'>
            <div>
                <h1>Your tutoring.</h1>
            </div>

            <h3>You have no booked sessions.</h3>
            
        </div>
    )
}

export default TutoringProfile

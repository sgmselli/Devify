import {React} from 'react';

import './Tutoring.css';
import Layout from '../../Layout/Layout';

function Tutoring() {

    
    return (
            <div className='tutorIndex'>
                <div className='container row'>
                    <div className='col indexText'>
                        <h1>We offer 1:1 tutoring across a range of coding languages</h1>
                        <h2>Devify can accelerate your developer journey with our 1:1 tutoring courses.
                            Here we go in detail and build projects for your resume, providing you with a
                            big leap to your first software developer internship/job. Tuition is covered at
                            a rate of just <u>£16.99/hour</u> with 70% off your first session</h2>
                    </div>
                    <div className='col indexInfo'>
                        <h1>So simple.</h1>
                        <ul>
                            <li>
                                <h2>‣ Apply from a range of our courses below</h2>
                            </li>
                            <li>
                                <h2>‣ Sessions will take place 1:1 online over Zoom</h2>
                            </li>
                            <li>
                                <h2>‣ Learn to code with a straight forward path to land a job</h2>
                            </li>
                            <li>
                                <h2>‣ Free first introductory session</h2>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
    )

}

export default Tutoring;
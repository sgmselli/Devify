import React from 'react';
import {Link} from 'react-router-dom'

import './Freelance.css'
import Layout from '../../Layout/Layout';

function Freelance() {
        return (
            <div>
                <Layout>
                    <div className='freelanceIndex'>
                        <div className='container row'>
                            <div className='col-lg indexText'>
                                <h1 className='text-light'>Begin your developer freelance journey with us, today.</h1>
                                <h2 className='text-light'>Getting experience is difficult but we make it easy. Join premium to get access to a range of freelance jobs to start earning as a developer now.</h2>
                            </div>
                            <div className='col-lg indexInfo'>
                                <h1>How we work with you.</h1>
                                <ul>
                                    <li><h2>‣ We find you a range of well paid freelance client jobs</h2></li>
                                    <li><h2>‣ Apply for the freelance job you want</h2></li>
                                    <li><h2>‣ Complete the job with Devify support always there to help</h2></li>
                                    <li><h2>‣ Receive your payement, add to your work experience, take another job</h2></li>
                                    <div className='middle'>
                                        <Link to='/Premium'><button className='btn btn-dark btn-md'>Premium</button></Link>
                                    </div>
                                    
                                </ul>
                            </div>
                        </div>
                        

                    </div>
                </Layout>
                
            </div>
        )
    
}

export default Freelance;
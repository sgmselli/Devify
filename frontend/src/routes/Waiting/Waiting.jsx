import React from 'react'
import Layout from '../../Layout/Layout';
import './Waiting.css'

function Waiting() {
    return (
        <Layout>
            <div className='Waiting bg-dark'>
                <div className='WaitingDiv container'>
                    <h1>Hey👋, You've been placed in a waiting list.
                    </h1>
                    <h2>We will notify you when a place opens!</h2>

                </div>
            </div>
        </Layout>
    )
}

export default Waiting;

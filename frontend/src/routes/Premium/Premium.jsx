import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './Premium.css'
import Layout from '../../Layout/Layout';
import { premiumClick } from '../../features/userActions';

function Premium() {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const handleClick = () => {
        document.getElementById('plans').scrollIntoView()
    }

    const notifyClick = () => {
        if(userInfo) {
            dispatch(premiumClick({
                'user': userInfo.username
            }))
            
        }
        
    }

    return (
        <Layout>
            <div className='Premium bg-dark'>
                <div className='premiumIndex container'>

                    <div className='premiumText'>
                        <h1>Get Premium</h1>
                        <h2>Plans from just £29.99 a month for freelancing and all courses. Cancel anytime.</h2>
                    </div>
                    <div className='premiumBtns'>
                            <button onClick={handleClick } className='btn btn-info btn-md'>Premium plans</button>
                    </div>
                </div>
            </div>

            <div id='plans' className='premiumContent container-fluid'>
                <div className='premiumHeading'>
                    <h1>Our premium plans</h1>
                </div>

                <div className='table-full'>
                    <table class="table table-striped table-dark ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Beginner developer plan</th>
                                <th scope="col">Intermediate developer plan</th>
                                <th scope="col">Advanced developer plan</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <ul>
                                        <li>‣ Learn web development as a beginner</li>
                                        <li>‣ 1-on-1 3-4x web development sessions per week optional</li>
                                        <li>‣ Once ready, start freelancing</li>
                                        <li>‣ Go from zero to earning money as a developer</li>
                                        <li>‣ Gain valuable experience to land a job</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>‣ Accept a range of freelance jobs we offer to you</li>
                                        <li>‣ Earn money and gain experience in web development</li>
                                        <li>‣ You will have a someone to contact for guidance in your jobs</li>
                                        <li>‣ Recieve an optional session a week to learn new skills
                                        </li>
                                        <li>‣ One freelance job a month cap
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>‣ Accept a range of freelance jobs we offer to you</li>
                                        <li>‣ Earn money and gain experience in web development</li>
                                        <li>‣ You will have a someone to contact for guidance in your jobs</li>
                                        <li>‣ unlimited freelance job cap</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>New to coding or web development</td>
                                <td>Comfortable building projects with html, css, javascript and knowledgable of
                                    React/Django</td>
                                <td>Very comfortable building full stack web applications</td>
                            </tr>
                            <tr>
                                <td>£69.99 per month</td>
                                <td>£29.99 per month</td>
                                <td>£49.99 per month</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='buttonRow'>
                                        <Link
                                            to={userInfo
                                            ? '/Waiting'
                                            : '/Login'}>
                                            <button onClick={notifyClick} className='btn btn-info btn-md'>Enroll now</button>
                                        </Link>

                                    </div>

                                </td>
                                <td >
                                    <div className='buttonRow'>
                                        <Link
                                            to={userInfo
                                            ? '/Waiting'
                                            : '/Login'}>
                                            <button onClick={notifyClick} className='btn btn-info btn-md'>Enroll now</button>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <div className='buttonRow'>
                                        <Link
                                            to={userInfo
                                            ? '/Waiting'
                                            : '/Login'}>
                                            <button onClick={notifyClick} className='btn btn-info btn-md'>Enroll now</button>
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='table-mobile'>
                    <table class="table table-striped table-dark ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Beginner developer</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <ul>
                                        <li>‣ Learn web development as a beginner</li>
                                        <li>‣ 1-on-1 3-4x web development sessions per week optional</li>
                                        <li>‣ Once ready, start freelancing</li>
                                        <li>‣ Go from zero to earning money as a developer</li>
                                        <li>‣ Gain valuable experience to land a job</li>
                                    </ul>
                                </td>

                            </tr>
                            <tr>
                                <td>New to coding or web development</td>
                            </tr>
                            <tr>
                                <td>£69.99 per month</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='buttonRow'>
                                        <Link
                                           
                                            to={userInfo
                                            ? '/Waiting'
                                            : '/Login'}>
                                            <button onClick={notifyClick} className='btn btn-info btn-lg'>Enroll now</button>
                                        </Link>

                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table table-striped table-dark ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Intermediate developer</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <ul>
                                        <li>‣ Accept a range of freelance jobs we offer to you</li>
                                        <li>‣ Earn money and gain experience in web development</li>
                                        <li>‣ You will have a someone to contact for guidance in your jobs</li>
                                        <li>‣ Recieve an optional session a week to learn new skills
                                        </li>
                                        <li>‣ One freelance job a month cap
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Comfortable building projects with html, css, javascript and knowledgable of
                                    React/Django</td>
                            </tr>
                            <tr>
                                <td>£29.99 per month</td>
                            </tr>
                            <tr>
                                <td >
                                    <div className='buttonRow'>
                                        <Link
                                            
                                            to={userInfo
                                            ? '/Waiting'
                                            : '/Login'}>
                                            <button onClick={notifyClick} className='btn btn-info btn-lg'>Enroll now</button>
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table table-striped table-dark ">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Advanced developer</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>
                                <ul>
                                    <li>‣ Accept a range of freelance jobs we offer to you</li>
                                    <li>‣ Earn money and gain experience in web development</li>
                                    <li>‣ You will have a someone to contact for guidance in your jobs</li>
                                    <li>‣ unlimited freelance job cap</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Very comfortable building full stack web applications</td>
                        </tr>
                        <tr>
                            <td>£49.99 per month</td>
                        </tr>
                        <tr>

                            <td >
                                <div className='buttonRow'>
                                    <Link
                                        to={userInfo
                                        ? '/Waiting'
                                        : '/Login'}>
                                        <button onClick={notifyClick} className='btn btn-info btn-lg'>Enroll now</button>
                                    </Link>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                </div>

                

            </div>

        </Layout>
    )
}

export default Premium;
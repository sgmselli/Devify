import React from 'react';
import {useSelector} from 'react-redux';
import Layout from '../../Layout/Layout';
import './Landing.css';
import {Link} from 'react-router-dom';

function Landing() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    return (
        <Layout>
            <div className='Landing'>
                <div className='index'>
                    <div class="container row">

                        <div class="col indexText">
                            <h1>Become a software developer now, by gaining experience.</h1>
                            <h2>Devify's mission is to land aspiring developers their first job by getting them freelance experience through which they can generate great earnings and gain valuable experience for your resumé. </h2>
                            <div className='buttons'>
                                <Link to="/Premium">
                                    <button className='btn btn-md btn-dark'>Premium 
                                    </button>
                                </Link>

                                {userInfo
                                    ? <Link to="/Account">
                                            <button className='btn btn-md btn-outline-dark'>Account</button>
                                        </Link>
                                    : <Link to="/Login">
                                        <button className='btn btn-md btn-outline-dark'>Login</button>
                                    </Link>
}
                            </div>
                        </div>

                        <div class="col indexImage">
                            <img src={"/static/image1.png"} alt="headshot"/>
                        </div>

                    </div>
                </div>
                <div className='content'>

                    <div class="jumbotron jumbotron-fluid">
                        <div class="container row">
                            <div className='col-lg'>
                                <h1 class="display-4">The all in one platform for aspiring software developers</h1>
                            </div>
                            <div className='col-lg jumbodetails'>
                                <h2 class="lead">Enroll now with one of our premium tiers to start your smooth journey to becoming a developer. Experience is the most valuable trait for a software developer's resumé, and Devify can get you it. Gain experience, get paid, learn web development. </h2>
                                <Link to='/Premium'>
                                    <button className='btn btn-lg btn-dark'>Get started
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className='cardsSection container-fluid'>
                        <div className="cardsHeading">
                            <h1>Software development awaits you.</h1>
                            <h2>We offer everything needs to land your first software development job. Devify finds you freelance jobs, provides 1-on-1 tutoring, and can complete work you send to us.</h2>
                        </div>
                        <div className="cards row">

                            <Link
                                to="/Freelance"
                                style={{
                                textDecoration: 'none'
                            }}>
                                <div className='col-lg card'>
                                    <div className='cardTitle'>
                                        <h1>Freelance.</h1>
                                        <img src={window.location.origin + "/static/laptop.png"} alt="money"/>
                                    </div>
                                    <div>
                                        <h2>Sign up to premium for us to find you suitable clients for you to freelance
                                            to. Gain experience on your resume and earn money while you do it.</h2>

                                    </div>
                                    <div>
                                        <h2>
                                            <u>Freelance now</u> ➔</h2>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to='/Tutoring'
                                style={{
                                textDecoration: 'none'
                            }}>
                                <div className='col-lg card'>
                                    <div className='cardTitle'>
                                        <h1>Learn.</h1>
                                        <img src={window.location.origin + "/static/calander.png"} alt="calander"/>
                                    </div>
                                    <div>
                                        <h2>We offer tutoring to both premium and non-premium Devify members, in your choice of software development field. Have a look and apply for tutoring now.</h2>

                                    </div>
                                    <div>
                                        <a>
                                            <h2>
                                                <u>Learn now</u> ➔</h2>
                                        </a>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to="/Hire" style={{
                                textDecoration: 'none'
                            }}>
                            <div className='col-lg card'>
                                <div className='cardTitle'>
                                    <h1>Hire us.</h1>
                                    <img src={window.location.origin + "/static/pencil.png"} alt="pencil"/>
                                    
                                </div>
                                <div>
                                    <h2>Devify provides a fast service to complete or help you with a software project you send to us for a cheap fee.</h2>

                                </div>
                                <div>
                                    <a>
                                        <h2>
                                            <u>Hire now</u> ➔</h2>
                                    </a>
                                </div>
                            </div>
                            </Link>

                        </div>

                    </div>
                </div>

                <div className='premiumSection container-fluid'>
                    <div className="premiumHeading">
                        <h1>Become a developer now with premium</h1>
                        <h2>Sign up to premium now from just <u>£39.99/month</u>, with a range of tiers covering all skill levels.</h2>
                    </div>

                    <div className='premiumBody row'>
                        <div className='col-lg premCard'>
                            <h1>Freelance 🗝️</h1>
                            <ul>
                                <li>
                                    <h2>‣ Recieve freelancing clients</h2>
                                </li>
                                <li>
                                    <h2>‣ Get paid well
                                    </h2>
                                </li>
                                <li>
                                    <h2>‣ Gain experience for your resumé
                                    </h2>
                                </li>

                                <li>
                                    <h2>‣ Guidance through your jobs
                                    </h2>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg premCard'>
                        <h1>Access tutoring 🗝️</h1>
                            <ul>
                                <li>
                                    <h2>‣ Optional tutoring to build your skills
                                    </h2>
                                </li>
                                <li>
                                    <h2>‣ learn while freelancing
                                    </h2>
                                </li>
                                <li>
                                    <h2>‣ Great CV projects for your resumé and support with them
                                    </h2>
                                </li>
                                <li>
                                    <h2>‣ Learn coding as a beginner or advanced
                                    </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='premiumButton'>
                        <Link to="/Premium"><button className='btn btn-dark btn-lg'>Get premium ➔</button></Link>
                    </div>
                </div>

                <div className='tutorSection container'>
                    <div className='tutorHeading'>
                        <h1>Devify offers 1-on-1 tutoring</h1>
                    </div>
                    <div className='tutorBody'>

                        <div className='tutorDevs row'>
                            <div className='col tutorText'>
                                <h1>Tutoring for aspiring software devs</h1>
                                <h2>Aspiring to be a software developer? Apply for one-on-one online tutoring
                                    with our specialists now to receive 70% your first session.
                                </h2>

                                <div className='row'>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn the basics</h3>
                                        <h4>Web development starts with HTML, CSS, and JavaScript. We will cover these
                                            in detail and work on a variety of projects. You can put these skills into
                                            freelancing!</h4>
                                    </div>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn front-end frameworks</h3>
                                        <h4>As a developer, you need to know frameworks like ReactJS. We will go through
                                            ReactJS in detail and build great projects such as a portfolio to land an
                                            internship/job.</h4>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn backend frameworks</h3>
                                        <h4>We offer tutoring for backend development in frameworks such as Python Django.</h4>
                                    </div>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Building resume projects</h3>
                                        <h4>We guide you through top projects to build that will shine on your resume to
                                            land your first internship/job.</h4>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/Tutoring"><button className='btn btn-dark btn-md'>Start tutoring 📖</button></Link>
                                </div>

                            </div>
                            <div className='col tutorImg'>
                                <img src={"/static/tutor3.png"} alt="tutor1"/>
                            </div>
                        </div>

                        <div className='tutorNorms row'>
                            <div className='col tutorImg'>
                                <img src={"/static/tutor4.png"} alt="tutor1"/>

                            </div>
                            <div className='col tutorText'>
                                <h1>Tutoring to learn how to code</h1>
                                <h2>Aspiring to be a software developer? Apply for one-on-one online tutoring
                                    with our specialists now to receive 70% your first session.</h2>

                                <div className='row'>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn Python</h3>
                                        <h4>Python is the top language currently, learn the basics of python and advance
                                            through the language with our tutoring.</h4>
                                    </div>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn JavaScript</h3>
                                        <h4>JavaScript is used everywhere on the internet and is in great demand. We
                                            will tutor JavaScript basics and advance through great projects.</h4>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn Java</h3>
                                        <h4>We offer tutoring in Java, learning programming fundimentals and building
                                            great projects to land an internship/job.
                                        </h4>
                                    </div>
                                    <div className='col'>
                                        <hr/>
                                        <h3>Learn Data Structures and Algorithms</h3>
                                        <h4>To land an internship/job, you need to know thid topic to pass the coding
                                            exams. We will tutor all aspects and get you interview ready.</h4>
                                    </div>
                                </div>
                                <div>
                                <Link to="/Tutoring"><button className='btn btn-dark btn-md'>Start tutoring 📖</button></Link>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Landing;
import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {newTutor} from '../../features/tutorAction';

import './Tutoring.css';
import Layout from '../../Layout/Layout';

function Tutoring() {

    const dispatch = useDispatch()

    const newTutorSelector = useSelector(state => state.tutorNew);
    const {error, tutoring} = newTutorSelector;

    const [first,
        setFirst] = useState('');
    const [last,
        setLast] = useState('');
    const [email,
        setEmail] = useState('');
    const [tele,
        setTele] = useState('');
    const [sessions,
        setSessions] = useState('');
    const [course,
        setCourse] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(newTutor({'name': `${first} ${last}`, 'email': email, 'tele': tele, 'sessionsPW': sessions, 'course': course}));
    }

    const handleClick = () => {
        document.getElementById('tutorForm').scrollIntoView()
    }

    const python = () => {
        setCourse('Beginner Python')
        handleClick()
    }
    const java = () => {
        setCourse('Beginner Java')
        handleClick()
    }
    const javascript = () => {
        setCourse('Beginner Javascript')
        handleClick()
    }
    const webdev = () => {
        setCourse('Web Development')
        handleClick()
    }
    const projects = () => {
        setCourse('Resume projects')
        handleClick()
    }
    const dsa = () => {
        setCourse('DS & A')
        handleClick()
    }

    return (
        <Layout>
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
                                <h2>‣ Take 70% off your first session</h2>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='subjects container'>

                <div className='header'>
                    <h1>Kick start off your coding journey 👟</h1>
                </div>

                <div className='subjectBoxes'>
                    <div className='row cards'>

                        <div className='col-lg card' onClick={python}>
                            <div className='cardTitle'>
                                <h1>Beginner Python</h1>
                                <img src={window.location.origin + "/static/python.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>We will start with the basics of the Python language, starting with basic
                                    data structures, functions, and loops. We will move on to OOP and build great
                                    resume projects.</h2>

                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Learn Python</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg card' onClick={java}>
                            <div className='cardTitle'>
                                <h1>Beginner Java</h1>
                                <img src={window.location.origin + "/static/java.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>We will start with the basic syntax of Java, moving on to OOP that opens
                                    great doors to high salaries and competitive jobs.</h2>

                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Learn Java</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg card' onClick={javascript}>
                            <div className='cardTitle'>
                                <h1>Beginner JavaScript</h1>
                                <img src={window.location.origin + "/static/javascript.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>Heard of JavaScript? Learn JavaScript and make your resume shine with our
                                    tutor course, where we will learn indepth JavaScript and build great projects.</h2>
                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Learn JavaScript</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='row cards'>

                        <div className='col-lg card' onClick={webdev}>
                            <div className='cardTitle'>
                                <h1>Web Development</h1>
                                <img src={window.location.origin + "/static/webdev.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>Through this 1:1 course, we will learn HTML, CSS, and Javascript. Build
                                    great projects such as your own web portfolio and transition these skills into
                                    freelancing.</h2>

                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Learn Web Development</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg card' onClick={projects}>
                            <div className='cardTitle'>
                                <h1>Resume projects.</h1>
                                <img src={window.location.origin + "/static/laptop.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>Join us along a tutoring course where we will go through the top resume projects tailoured to you that we will teach you how to build.</h2>

                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Build now</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg card' onClick={dsa}>
                            <div className='cardTitle'>
                                <h1>DS&A.</h1>
                                <img src={window.location.origin + "/static/dsa.png"} alt="money"/>
                            </div>
                            <div>
                                <h2>Ready to start applying for dev internships/jobs? Ace the coding exams with
                                    our data structures & algorithms 1:1 sessions, giving you the best advice and
                                    schedual</h2>

                            </div>
                            <div>
                                <a>
                                    <h2>
                                        <u>Learn DS&A</u>
                                        ➔</h2>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='tutorContact container-fluid' id='tutorForm'>

                <div className='jumbotron '>
                    
                    <div className='header'>
                        <h1>Apply for tutoring now</h1>
                    </div>

                    

                    <form onSubmit={submitHandler} className='container'>
                    {error && <div className='alert alert-danger'>There was an error with your application. Try again.</div> }
                    {tutoring && <div className='alert alert-success'>Your application was successful.</div> }
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                    onChange={(e) => setFirst(e.target.value)}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                    onChange={(e) => setLast(e.target.value)}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Telephone"
                                    onChange={(e) => setTele(e.target.value)}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Sessions per week?"
                                    onChange={(e) => setSessions(e.target.value)}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control is-invalid"
                                    placeholder="Select course above"
                                    value={course}
                                    readOnly/>
                            </div>
                        </div>
                        <button type="submit" className='btn btn-dark btn-lg'>Apply now</button>
                    </form>

                </div>

            </div>

        </Layout>
    )

}

export default Tutoring;
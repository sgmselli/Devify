import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Layout from '../../Layout/Layout';
import './Landing.css';
import {Link} from 'react-router-dom';
import {newTutor} from '../../features/tutorAction';

import Hire from '../Hire/Hire';
import Tutoring from '../Tutoring/Tutoring';

function Landing() {

    const dispatch = useDispatch()

    const newTutorSelector = useSelector(state => state.tutorNew);
    const {error, tutoring} = newTutorSelector;

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

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
        document
            .getElementById('tutorForm')
            .scrollIntoView()
    }

    const python = () => {
        setCourse('Python')
        handleClick()
    }
    const java = () => {
        setCourse('Java')
        handleClick()
    }
    const webdev = () => {
        setCourse('Web Development')
        handleClick()
    }

    return (
        <Layout>
            <div className='Landing'>
                <div className='index'>
                    <div class="container row">

                        <div class="col indexText">
                            <h1>Become a software developer now, by gaining experience.</h1>
                            <h2>Devify's mission is to land aspiring developers their first job by getting
                                them freelance experience through which they can generate great earnings and
                                gain valuable experience for your resumé.
                            </h2>
                            <div className='buttons'>

                                {userInfo
                                    ? <Link to="/Account">
                                            <button className='btn btn-md btn-dark'>{(userInfo.name).split(' ')[0].charAt(0).toUpperCase() + (userInfo.name).split(' ')[0].slice(1)}
                                                👋</button>
                                        </Link>
                                    : <Link to="/Login">
                                        <button className='btn btn-md btn-dark'>Login</button>
                                    </Link>
}
                                <Link to="/Premium">
                                    <button className='btn btn-md btn-outline-dark'>Premium
                                    </button>
                                </Link>
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
                                <h2 class="lead">Enroll now with one of our premium tiers to start your smooth
                                    journey to becoming a developer. Experience is the most valuable trait for a
                                    software developer's resumé, and Devify can get you it. Gain experience, get
                                    paid, learn web development.
                                </h2>
                                <Link to='/Premium'>
                                    <button className='btn btn-lg btn-dark'>Get started ➔
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className='cardsSection container-fluid'>
                        <div className="cardsHeading">
                            <h1>Software development awaits you.</h1>
                            <h2>We offer everything needs to land your first software development job.
                                Devify finds you freelance jobs, provides 1-on-1 tutoring, and can complete work
                                you send to us.</h2>
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
                                            <u>Freelance now</u>
                                            ➔</h2>
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
                                        <h2>We offer tutoring to both premium and non-premium Devify members, in your
                                            choice of software development field. Have a look and apply for tutoring now.</h2>

                                    </div>
                                    <div>
                                        <a>
                                            <h2>
                                                <u>Learn now</u>
                                                ➔</h2>
                                        </a>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to="/Hire"
                                style={{
                                textDecoration: 'none'
                            }}>
                                <div className='col-lg card'>
                                    <div className='cardTitle'>
                                        <h1>Hire us.</h1>
                                        <img src={window.location.origin + "/static/pencil.png"} alt="pencil"/>

                                    </div>
                                    <div>
                                        <h2>Devify provides a fast service to complete or help you with a software
                                            project you send to us for a cheap fee.</h2>

                                    </div>
                                    <div>
                                        <a>
                                            <h2>
                                                <u>Hire now</u>
                                                ➔</h2>
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
                        <h2>Sign up to premium now from just <u>£29.99/month</u>, with a range of tiers covering all skill levels.</h2>
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
                        <Link to="/Premium">
                            <button className='btn btn-dark btn-lg'>Get premium ➔</button>
                        </Link>
                    </div>
                </div>

                <Tutoring/>

                <div className='tutorSection '>

                    <div className='subjects container'>

                        <div className='subjectBoxes'>
                            <div className='row cards'>

                                <div className='col-lg card' onClick={python}>
                                    <div className='cardTitle'>
                                        <h1>Python</h1>
                                        <img src={window.location.origin + "/static/python2.png"} alt="money"/>
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
                                        <h1>Java</h1>
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

                            </div>

                        </div>
                    </div>

                    <div className='tutorContact container-fluid'>

                        <div className='jumbotron ' id='tutorForm'>

                            <div className='header'>
                                <h1>Apply for tutoring now</h1>
                            </div>

                            <form onSubmit={submitHandler} className='container'>
                                {error && <div className='alert alert-danger'>There was an error with your application</div>}
                                {tutoring && <div className='alert alert-success'>Your application was successful</div>}
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="First name"
                                            onChange={(e) => setFirst(e.target.value)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Last name"
                                            onChange={(e) => setLast(e.target.value)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Telephone"
                                            onChange={(e) => setTele(e.target.value)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="number" min="0" step="1"
                                            class="form-control"
                                            placeholder="Sessions per week?"
                                            onChange={(e) => setSessions(e.target.value)} required/> 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input
                                            type="text"
                                            class="form-control is-invalid"
                                            placeholder="Select course above"
                                            value={course}
                                            readOnly required/>
                                    </div>
                                </div>
                                <button type="submit" className='btn btn-dark btn-lg'>Apply now</button>
                            </form>

                        </div>
                    </div>
                </div>

                <div className='freelanceIndex'>
                    <div className='row freelanceContainer'>

                        <div className='col-lg freelanceCol'>
                        <div className='middle'>
                            <a href="#carouselExampleControls" role="button" data-slide="prev">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="black"
                                        class="bi bi-chevron-left"
                                        viewBox="0 0 16 16">
                                        <path
                                            fill-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </a>

                                <a href="#carouselExampleControls" role="button" data-slide="next">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="black"
                                        class="bi bi-chevron-right"
                                        viewBox="0 0 16 16">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </a>
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className='landingCarousel'>
                                            <Link
                                                to='/Premium'
                                                style={{
                                                textDecoration: 'none'
                                            }}>
                                                <div className='freelanceCard bg-dark'>
                                                    <h6>Caesar cipher</h6>
                                                    <p>Brief: A student would like a Caesar cipher build for their past assignment. This needs to be build in Java, so Java knowledge is needed. Also, provide comments clearly explaining code. Images of assignment will be sent after assignment.
                                                    </p>
                                                    <p>Client: A UoL CS student</p>
                                                    <p>Due: Before start of June</p>
                                                    <p>Earnings: £15</p>
                                                    <button type='submit' className='btn btn-md btn-info'>Apply</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='landingCarousel'>
                                            <Link
                                                to='/Premium'
                                                style={{
                                                textDecoration: 'none'
                                            }}>
                                                <div className='freelanceCard bg-dark'>

                                                    <h6>Portfolio site</h6>
                                                    <p>Brief: Create a basic portfolio site for a student that will include multiple pages including landing, education, projects, and a contact. All details and images will be provided after assignment.
                                                    </p>
                                                    <p>Client: Client details after assignment</p>
                                                    <p>Due: N/A</p>
                                                    <p>Earnings: £25</p>
                                                    <button type='submit' className='btn btn-md btn-info'>Apply</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='landingCarousel'>
                                            <Link
                                                to='/Premium'
                                                style={{
                                                textDecoration: 'none'
                                            }}>
                                                <div className='freelanceCard bg-dark'>
                                                    <h6>Django employee site</h6>
                                                    <p>Brief: A student, living in India, would like a multi-authorisation site for admin and employees in Django, no styling needed. Admin can create new employees, whereas employees can only view the table of employees. More details provided after assignment.
                                                    </p>
                                                    <p>Client: IIoTB Student</p>
                                                    <p>Due: 18-05-2023
                                                    </p>
                                                    <p>Earnings: £22</p>
                                                    <button type='submit' className='btn btn-md btn-info'>Apply</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className='col-lg indexText'>
                            <h1 className='text-light'>Begin your developer freelance journey with us, today.</h1>
                            <h2 className='text-light'>Getting experience is difficult, so we do it for you.
                                Join premium to get access to a range of freelance jobs to start earning as a
                                developer now.</h2>
                            <div className='middle'>
                                <Link to='/Premium'>
                                    <button className='btn btn-dark btn-lg'>Freelance now ➔
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                <Hire/>

            </div>
        </Layout>
    )
}

export default Landing;
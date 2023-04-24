import {React, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './Account.css';

import Layout from '../../Layout/Layout';
import DetailsProfile from '../../components/DetailsProfile/DetailsProfile';
import FreelanceProfile from '../../components/FreelanceProfile/FreelanceProfile';
import TutoringProfile from '../../components/TutoringProfile/TutoringProfile';

function Account() {

    const [section,
        setSection] = useState('freelance');
    let sectionDiv = null

    const navigate = useNavigate()

    //Load in user details from DB
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    //If not logged in, don't allow access to account page
    useEffect(() => {
        if (!userInfo) {
            navigate('/Login', {replace: true})
        }
    }, [userInfo, navigate])

    if (section === 'freelance') {
        sectionDiv = (
            <div className='freelanceDisplayed'>
                <FreelanceProfile/>
            </div>
        )
    } else if (section === 'details') {
        sectionDiv = (
            <div className='detailsDisplayed'>
                <DetailsProfile/>
            </div>
        )
    } else if (section === 'tutoring') {
        sectionDiv = (
            <div className='tutoringDisplayed'>
                <TutoringProfile/>
            </div>
        )
    }

    const handleClickDetails = () => {
        setSection('details')
        const d = document.querySelectorAll('.accountOption')
        d[1].classList.remove('active-middle')
        d[2].classList.remove('active-right')
        document.getElementById('details').classList.add('active-left')

    }

    const handleClickFreelance = () => {
        setSection('freelance')
        const d = document.querySelectorAll('.accountOption')
        d[0].classList.remove('active-left')
        d[2].classList.remove('active-right')
        document.getElementById('freelance').classList.add('active-middle')
    }

    const handleClickTutoring = () => {
        setSection('tutoring')
        const d = document.querySelectorAll('.accountOption')
        d[0].classList.remove('active-left')
        d[1].classList.remove('active-middle')

        document.getElementById('tutoring').classList.add('active-right')
    }

    return (
        <Layout>

            <div className='Account'>
                <div className='accountHeader'>
                    <div className='container'>
                        <div className='accountHeaderText'>
                            <h4>Welcome back, {(userInfo.name).split(' ')[0].charAt(0).toUpperCase()+(userInfo.name).split(' ')[0].slice(1)}👋</h4>
                            <h5>Here you can view your account details, manage and pick up freelancing jobs as well as manage and book tutoring sessions.
                            </h5>
                        </div>
                        
                        <div className='options'>
                            <div className='accountOption' id='details' onClick={handleClickDetails}>
                                <h3>Details</h3>  
                            </div>
                            <div className='accountOption active-middle' id='freelance' onClick={handleClickFreelance}>
                                <h3>Freelancing</h3>
                            </div>
                            <div className='accountOption' id='tutoring' onClick={handleClickTutoring}>
                                <h3>Tutoring</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sectionDisplayed container'>
                    {sectionDiv}
                </div>

            </div>
        </Layout>
    )

}

export default Account;
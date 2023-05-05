import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {listFreelances} from '../../features/freelanceAction';
import {freelanceApply} from '../../features/freelanceAction';
import { getPremiumAccounts } from '../../features/userActions';

import './FreelanceProfile.css'

function FreelanceProfile() {

    //Current screen width
    const windowSize = window.innerWidth;   

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Current logged in user details
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    //Load in freelancing tickets from DB
    const freelanceList = useSelector(state => state.freelances)
    const {error, loading, freelances} = freelanceList;

    //Load in premium accounts
    const premiumList = useSelector(state => state.premiumAccounts)
    const { premiumAccounts } = premiumList;

    const premiums = premiumAccounts.map((account) => account.user)

    //SArrange freelance jobs into whether they're available, taken, or completed
    const availableFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user == '');
    const currentFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user == userInfo.username);
    const pastFreelances = freelances.filter((ticket) => ticket.completed == true && ticket.user == userInfo.username);

    // Returns the button needed for the type of freelance card, whether an
    // available, current, or past
    const displayButton = (type, id) => {
        //For available tickets

        if (type == 'availableFreelance') {
            const buttonEle = document.createElement('button');
            
            buttonEle
                .classList
                .add('btn', 'btn-sm', 'btn-dark')
                
            buttonEle.append('Apply')

            //Send application of user's name with the freelance job to DB
            const handleClickApply = (e) => {
                e.preventDefault()
                console.log(premiums)
                if (premiums.includes(userInfo.username)) {
                    dispatch(freelanceApply(id, {'application': userInfo.username}))
                    alert('Job application successful')
                } else {
                    navigate('/Premium')
                    alert('To access freelance jobs today, join premium. Have a look at our high value plans!')
                }
            }

            buttonEle.addEventListener("click", handleClickApply)
            return buttonEle

            //for currently taken tickets
        } else if (type == 'currentFreelance') {
            const a = document.createElement('a');
            a.setAttribute("href", 'mailto:devify@outlook.com');
            const mail = document.createElement('button');
            mail.append('Upload zip to devify@outlook.com');
            mail.classList.add('btn', 'btn-sm', 'btn-info');
            a.append(mail)

            return a

            //No button needed for past tickets
        } else {
            return ''
        }
    }

    //Displays the ticket information
    const displayTicket = (title, des, client, due, earnings, type, colour, id) => {
        
        const card = document.createElement('div')
        card
            .classList
            .add('freelanceCard', 'bg-'+colour)

        const titleEle = document.createElement('h6')
        titleEle.append(title)
        const briefEle = document.createElement('p')
        briefEle.append('Brief: '+des)
        const clientEle = document.createElement('p')
        clientEle.append('Client: '+client)
        const dueEle = document.createElement('p')
        dueEle.append('Due: '+due)
        const earningsEle = document.createElement('p')
        earningsEle.append('Earnings: £'+earnings)
        const buttonEle = displayButton(type, id);

        card.append(titleEle, briefEle, clientEle, dueEle, earningsEle, buttonEle)

        return card
    }

    const carouselTickets = (ticketType, myid) => {

        let ticket = ''
        let colour = '';
        if (ticketType == 'availableFreelance') {
            colour = 'info';
            ticket = availableFreelances

        } else if (ticketType == 'currentFreelance') {
            colour = 'dark';
            ticket = currentFreelances

        } else {
            colour = 'success';
            ticket = pastFreelances
        }

        const c = myid;
        const len = ticket.length;
        let i = 0;
        let ticketsPerSlide = 1; //Number of tickets per carousel slide (default 1)
        
        while (i < len) {
            const item = document.createElement('div');
            const display = document.createElement('div');
            item
                .classList
                .add('carousel-item');
            display
                .classList
                .add('ticketsCarousel');

            if (i === 0) {
                //first lots of tickets show on first carousel slide
                item
                .classList
                .add('active');
            }
            if (i <= len - 1) {
                const ticket1 = ticket[i];
                const card = displayTicket(ticket1.title, ticket1.description, ticket1.client, ticket1.dueDate, ticket1.price, ticketType, colour, ticket1._id);
                display.append(card);
            }
            if (windowSize > 800) {
                if (i + 1 <= len - 1) {
                    const ticket2 = ticket[i + 1];
                    const card = displayTicket(ticket2.title, ticket2.description, ticket2.client, ticket2.dueDate, ticket2.price, ticketType, colour, ticket2._id);
                    display.append(card);
                }
                ticketsPerSlide = 2;
            }
            if (windowSize > 1100) {
                if (i + 2 <= len - 1) {
                    const ticket3 = ticket[i + 2];
                    const card = displayTicket(ticket3.title, ticket3.description, ticket3.client, ticket3.dueDate, ticket3.price, ticketType, colour, ticket3._id);
                    display.append(card);
                }
                ticketsPerSlide = 3;
            }
            
            item.append(display);
            c.append(item);
            i += ticketsPerSlide;
        }
    }

    useEffect(() => {
        dispatch(listFreelances());
        dispatch(getPremiumAccounts());
    }, [dispatch])

    useEffect(() => {

        const availableId = document.getElementById('availableFreelance')
        const currentId = document.getElementById('currentFreelance')
        const pastId = document.getElementById('pastFreelance')

        if (availableFreelances.length > 0 && availableId.innerHTML === '') {
            carouselTickets('availableFreelance' , availableId);
        }
        if (currentFreelances.length > 0 && currentId.innerHTML === '') {
            carouselTickets('currentFreelance', currentId);
        }
        if (pastFreelances.length > 0 && pastId.innerHTML === '') {
            carouselTickets('pastFreelance', pastId);
        }

    }, [freelanceList])

    return (
        <div className='FreelanceProfile'>
            <div>
                <h1>Your freelancing.</h1>
            </div>
            <div className='ticketSection'>
                <div className='ticketsHeader'>
                    <h2>Available tickets.</h2>

                    <div>

                        <a href="#availableCarousel" role="button" data-slide="prev">
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

                        <a href="#availableCarousel" role="button" data-slide="next">
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

                </div>

                <div id="availableCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">

                        
                        {loading //If loading, show loader.
                            ? <h3>loading tickets...</h3>
                            : error //If not loading, if theres an error show error
                                ? <h2>{error}</h2>
                                : availableFreelances.length > 0 //If no error, check array of available freelances length
                                    ? <div id='availableFreelance'></div> //If greater than 0, show carousel of tickets
                                    : <h3>You have no current tickets.</h3> //Else display no tickets
}
                    </div>

                </div>

            </div>

            <div className='ticketSection'>
            <div className='ticketsHeader'>
                    <h2>Current tickets.</h2>

                    <div>

                        <a href="#currentCarousel" role="button" data-slide="prev">
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

                        <a href="#currentCarousel" role="button" data-slide="next">
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

                </div>

                <div id="currentCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active"></div>

                        
                        {loading //If loading, show loader.
                            ? <h3>loading tickets...</h3>
                            : error //If not loading, if theres an error show error
                                ? <h2>{error}</h2>
                                : currentFreelances.length > 0 //If no error, check array of available freelances length
                                    ? <div id='currentFreelance'></div> //If greater than 0, show carousel of tickets
                                    : <h3>You have no current tickets.</h3> //Else display no tickets
}
                    </div>

                </div>
            </div>

            <div className='ticketSection'>
            <div className='ticketsHeader'>
                    <h2>Past tickets.</h2>

                    <div>

                        <a href="#pastCarousel" role="button" data-slide="prev">
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

                        <a href="#pastCarousel" role="button" data-slide="next">
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

                </div>

                <div id="pastCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active"></div>

                        
                        {loading //If loading, show loader.
                            ? <h3>loading tickets...</h3>
                            : error //If not loading, if theres an error show error
                                ? <h2>{error}</h2>
                                : pastFreelances.length > 0 //If no error, check array of available freelances length
                                    ? <div id='pastFreelance'></div> //If greater than 0, show carousel of tickets
                                    : <h3>You have no current tickets.</h3> //Else display no tickets
}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FreelanceProfile

import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listFreelances, freelanceApply} from '../../features/freelanceAction';

import './FreelanceProfile.css'

function FreelanceProfile() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFreelances())

    }, [dispatch])

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    //Load in freelancing tickets from DB
    const freelanceList = useSelector(state => state.freelances)
    const {error, loading, freelances} = freelanceList;

    //Arrange tickets
    const availableFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user == '');
    const currentFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user == userInfo.username);
    const pastFreelances = freelances.filter((ticket) => ticket.completed == true && ticket.user == userInfo.username);

    const handleClickApply = (id) => (e) => {
        e.preventDefault()
        dispatch(freelanceApply(id, {'application': userInfo.username}))
    }

    return (
        <div className='FreelanceProfile'>
            <div>
                <h1>Your freelancing.</h1>
            </div>
            <div className='ticketSection'>
                <h2>Available tickets.</h2>
                {loading
                    ? <div class="loader"></div>
                    : error
                        ? <h2>{error}</h2>
                        : availableFreelances.length > 0
                            ? <div>{(availableFreelances).map((ticket) => {
                                        return (
                                            <div className='freelanceCard bg-info'>
                                                <h6>{ticket.title}</h6>
                                                <p>Brief: {ticket.description}</p>
                                                <p>Client: {ticket.client}</p>
                                                <p>Due: {ticket.dueDate}</p>
                                                <p>Earnings: £{ticket.price}</p>
                                                <button
                                                    type='submit'
                                                    onClick={handleClickApply(ticket._id)}
                                                    className='btn btn-md btn-dark'>Apply</button>

                                            </div>

                                        )
                                    })}</div>

                            : <h3>There is no current available tickets.</h3>
}

            <div>
            {loading
                    ? <div class="loader"></div>
                    : error
                        ? <h2>{error}</h2>
                        : availableFreelances.length > 0
                            ? <div>{(availableFreelances).map((ticket) => {
                                        return (
                                            <div className='freelanceCard bg-info'>
                                                <h6>{ticket.title}</h6>
                                                <p>Brief: {ticket.description}</p>
                                                <p>Client: {ticket.client}</p>
                                                <p>Due: {ticket.dueDate}</p>
                                                <p>Earnings: £{ticket.price}</p>
                                                <button
                                                    type='submit'
                                                    onClick={handleClickApply(ticket._id)}
                                                    className='btn btn-md btn-dark'>Apply</button>

                                            </div>

                                        )
                                    })}</div>

                            : <h3>There is no current available tickets.</h3>
}
            <div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
                            <div class="carousel-inner">
                            <div>{(availableFreelances).map((ticket) => {
                                        return (
                                            <div className='carousel-item'>
                                                <div className='ticketsCarousel'>
                                            
                                            <div className='freelanceCard bg-info'>
                                                <h6>{ticket.title}</h6>
                                                <p>Brief: {ticket.description}</p>
                                                <p>Client: {ticket.client}</p>
                                                <p>Due: {ticket.dueDate}</p>
                                                <p>Earnings: £{ticket.price}</p>
                                                <button
                                                    type='submit'
                                                    onClick={handleClickApply(ticket._id)}
                                                    className='btn btn-md btn-dark'>Apply</button>

                                            </div>
                                            </div>
                                            </div>
                                        )
                                    })}</div>
                                
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
            </div>
            </div>

            <div className='ticketSection'>
                <h2>Your current tickets.</h2>
                {loading
                    ? <div class="loader"></div>
                    : error
                        ? <h2>{error}</h2>
                        : currentFreelances.length > 0
                            ? <div className='tickets'>{(currentFreelances).map((ticket) => {
                                        return (
                                            <div className='freelanceCard bg-dark'>
                                                <h6>{ticket.title}</h6>
                                                <p>Brief: {ticket.description}</p>
                                                <p>Client: {ticket.client}</p>
                                                <p>Due: {ticket.dueDate}</p>
                                                <p>Earnings: £{ticket.price}</p>
                                                <a className='btn btn-sm btn-success' href="mailto:devify@outlook.com">Upload zip to devify@outlook.com
                                                </a>

                                            </div>

                                        )
                                    })}</div>
                            : <h3>You have no current tickets.</h3>
}
            </div>

            <div className='ticketSection'>
                <h2>Past tickets.</h2>
                {loading
                    ? <div class="loader"></div>
                    : error
                        ? <h2>{error}</h2>
                        : pastFreelances.length > 0
                            ? <div className='tickets'>{(pastFreelances).map((ticket) => {
                                        return (
                                            <div className='freelanceCard bg-success'>
                                                <h6>{ticket.title}</h6>
                                                <p>Client: {ticket.client}</p>
                                                <p>Earnings: £{ticket.price}</p>

                                            </div>
                                        )
                                    })}</div>
                            : <h3>You have no past tickets.</h3>
}
            </div>
        </div>
    )
}

export default FreelanceProfile

import {React, useState, useEffect} from 'react'
import {listProfiles} from '../../features/userActions';
import {freelanceCompleted, listFreelances, freelanceCreate, freelanceAssign} from '../../features/freelanceAction';
import { listBookings } from '../../features/tutorAction';
import {useDispatch, useSelector} from 'react-redux';
import './AdminControl.css';

function AdminControl() {

    const freelanceCreateAction = useSelector(state => state.freelanceCreateAction);
    const {error, freelanceCreatePayload} = freelanceCreateAction;

    const freelanceList = useSelector(state => state.freelances)
    const {freelances, loading} = freelanceList;

    const userProfiles = useSelector(state => state.userProfiles)
    const {profiles} = userProfiles

    const tutorBookings = useSelector(state => state.tutorBookings)
    const {bookings} = tutorBookings;

    const [user,
        setUser] = useState('a@gmail.com')

    const [title,
        setTitle] = useState('');
    const [description,
        setDescription] = useState('');
    const [price,
        setPrice] = useState('');
    const [dueDate,
        setDueDate] = useState('');
    const [client,
        setClient] = useState('');
    const [complete,
        setComplete] = useState(false);

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(freelanceCreate({
            'user': '',
            'title': title,
            'description': description,
            'price': price,
            'dueDate': dueDate,
            'client': client,
            'completed': complete
        }));
    }

    const handleClickCompleted = (id) => () => {
        dispatch(freelanceCompleted(id, {'completed': true}))
    }

    const handleClickAssign = (id) => () => {
        dispatch(freelanceAssign(id, {'user': user}))
    }

    useEffect(() => {
        dispatch(listProfiles());
        dispatch(listFreelances());
        dispatch(listBookings());
    }, [dispatch, ])

    const availableFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user == '');
    const takenFreelances = freelances.filter((ticket) => ticket.completed == false && ticket.user != '');
    const pastFreelances = freelances.filter((ticket) => ticket.completed == true);

    return (
        <div className='AdminControl'>
            <div className='nav navbar-dark bg-dark'>
                <div className='navbar-brand'>
                    DEVify admin control
                </div>
            </div>

            <div className='container adminFreelance'>

                <h1>Create Freelance job</h1>
                {error && <div className='alert alert-danger'>Error creating freelance job. Retry.</div>}
                {freelanceCreatePayload && <div className='alert alert-success'>Freelance job successfully created.</div>}
                <form onSubmit={submitHandler}>

                    <div className='row'>
                        <input
                            className='col form-control'
                            placeholder='Project'
                            onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <input
                            className='col form-control'
                            placeholder='Description'
                            onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <input
                            className='col form-control'
                            placeholder='DueDate'
                            onChange={(e) => setDueDate(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <input
                            className='col form-control'
                            placeholder='Client'
                            onChange={(e) => setClient(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <input
                            className='col form-control'
                            placeholder='Prices'
                            onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Completed</label>
                        </div>
                        <div className='col'>
                            <input
                                className='form-control'
                                type="checkbox"
                                placeholder='Complete'
                                onChange={(e) => setComplete(e.target.checked)}/>
                        </div>

                    </div>
                    <div className='row'>
                        <button type='submit' className='btn btn-md btn-dar'>Create job</button>
                    </div>
                </form>
            </div>

            <div className='FreelanceTickets container'>
                <h1>Freelance jobs</h1>
                <div className='ticketSection'>
                    <h2>Available tickets</h2>
                    {loading
                        ? <h2>loading</h2>
                        : error
                            ? <h2>{error}</h2>
                            : availableFreelances.length > 0
                                ? <div className='tickets'>{(availableFreelances).map((ticket) => {
                                            return (
                                                <div className='ticketData'>
                                                    <h6>{ticket.title} {ticket.user} {ticket._id}</h6>
                                                    <p>Brief: {ticket.description}</p>
                                                    <p>Client: {ticket.client}</p>
                                                    <p>Due: {ticket.dueDate}</p>
                                                    <p>Earnings: £{ticket.price}</p>
                                                    <p>[{ticket.applications}]</p>
                                                    <div>
                                                        <form onSubmit={handleClickAssign(ticket._id)}>
                                                            <select onChange={(e) => setUser(e.target.value)}>
                                                                {(profiles).map((profile) => {
                                                                    return <option>{profile.username}</option>
                                                                })}
                                                            </select>
                                                            <button type='submit' className='btn btn-md'>Assign</button>

                                                        </form>
                                                    </div>

                                                </div>

                                            )
                                        })}</div>
                                : <h3>No Uncompleted tasks</h3>
}
                </div>

                <div className='ticketSection'>
                    <h2>Uncompleted tickets</h2>
                    {loading
                        ? <h2>loading</h2>
                        : error
                            ? <h2>{error}</h2>
                            : takenFreelances.length > 0
                                ? <div className='tickets'>{(takenFreelances).map((ticket) => {
                                            return (
                                                <div className='ticketData'>
                                                    <h6>{ticket.user}</h6>
                                                    <h6>{ticket.title}
                                                        </h6>
                                                    <p>Brief: {ticket.description}</p>
                                                    <p>Client: {ticket.client}</p>
                                                    <p>Due: {ticket.dueDate}</p>
                                                    <p>Earnings: £{ticket.price}</p>
                                                    <div>
                                                        <form onSubmit={handleClickCompleted(ticket._id)}>
                                                            <button type='submit' className='btn btn-md'>Mark as complete</button>
                                                        </form>

                                                    </div>
                                                </div>

                                            )
                                        })}</div>
                                : <h3>No Uncompleted tasks</h3>
}
                </div>

                <div className='ticketSection'>
                    <h2>Completed tickets.</h2>
                    {loading
                        ? <h2>loading</h2>
                        : error
                            ? <h2>{error}</h2>
                            : pastFreelances.length > 0
                                ? <div className='tickets'>{(pastFreelances).map((ticket) => {
                                            return (
                                                <div className='ticketData'>
                                                    <h6>{ticket.user}</h6>
                                                    <h6>{ticket.title}
                                                        </h6>
                                                    <p>Brief: {ticket.description}</p>
                                                    <p>Client: {ticket.client}</p>
                                                    <p>Due: {ticket.dueDate}</p>
                                                    <p>Earnings: £{ticket.price}</p>

                                                </div>
                                            )
                                        })}</div>
                                : <h3>
                                    No completed tickets.</h3>
}
                </div>

            </div>

            <div className='container TutorBookings'>
                <h1>Tutor bookings</h1>
                {(bookings).map((booking) => {
                    return (
                        <div className='ticketData'>
                        <h6>{booking.name} </h6>
                        <p>{booking.email}</p>
                        <p>{booking.tele}</p>
                        <p>{booking.sessionsPW}</p>
                        <p>{booking.course}</p>
                        

                    </div>
                    )
                })}
            </div>


            <div className='container'>
                <h1>User profiles</h1>
                {(profiles).map((profile) => {
                    return <h2>{profile.username}</h2>
                })}
            </div>

        </div>
    )
}

export default AdminControl;
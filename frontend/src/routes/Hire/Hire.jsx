import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createHire} from '../../features/hireAction';
import './Hire.css'

function Hire() {

    const [name,
        setName] = useState('')
    const [email,
        setEmail] = useState('')
    const [tele,
        setTele] = useState('')
    const [date,
        setDate] = useState('')
    const [title,
        setTitle] = useState('')
    const [description,
        setDescription] = useState('')

    const dispatch = useDispatch();

    const hireSelector = useSelector(state => state.hireCreate);
    const {error, hire} = hireSelector

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createHire({
            'name': name,
            'email': email,
            'tele': tele,
            'completeBy': date,
            'title': title,
            'details': description
        }))
    }

    const today = new Date()
        .toISOString()
        .split('T')[0];

    return (
        <div>
            <div className='hireIndex'>
                <div className='container row'>
                    <div className='col-xl indexText'>
                        <h1 className='text-light'>Hire our developers for your project. Big or small.</h1>
                        <h2 className='text-light'>Devify not only finds freelance work for aspiring
                            developers, but we offer it too. If you need a project built for you or helping
                            out with, fill out our form and apply.</h2>
                    </div>
                    <div className='col-xl indexInfo'>
                        <h1>Hire us.</h1>
                        <ul>
                            <li>
                                <h2>‣ Fill out our form below
                                </h2>
                            </li>
                            <li>
                                <h2>‣ Include yours and your projects details clearly</h2>
                            </li>
                            <li>
                                <h2>‣ Include your timeframe of completion</h2>
                            </li>
                            <li>
                                <h2>‣ We will run through the details and offer you a price</h2>
                            </li>
                            <li>
                                <h2>‣ Your project will be completed quickly and with high quality</h2>
                            </li>
                            <li>
                                <h2>‣ We will complete any project, big or small.</h2>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='hireContact container'>
                <div className='header'>
                    <h1>Get your project completed now 👨‍💻</h1>
                </div>
                {error && <div className='alert alert-danger'>There was an error with your application</div> }
                {hire && <div className='alert alert-success'>Your application was successful</div> }
                <form onSubmit={submitHandler}>
                    <div class="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Full name" onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Project name" onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Telephone" onChange={(e) => setTele(e.target.value)} required/>
                        </div>
                    </div>
                    <div class="row">
                        <div className='col-5 date'>
                            <label for='#date'>Desired completion date:</label>
                        </div>
                    
                        <div class="col">
                            <input type="date" id='date' className="form-control" placeholder='Desired completion date' min={today} onChange={(e) => setDate(e.target.value)} required />
                        </div>
                    </div>
                    <div>
                        <textarea type="text" className="form-control" placeholder="Project details" onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                    <div className='buttonMiddle'>
                        <button type="submit" className='btn btn-dark btn-lg'>Apply now</button>
                    </div>

                </form>
            </div>
</div>
    )

}

export default Hire;
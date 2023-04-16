import {React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../Layout/Layout';
import {Link} from 'react-router-dom';
import {register} from '../../features/userActions';

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [matchError, setMatch] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector( state => state.userRegister)
    const {error, userInfo} = userRegister

    const submitHandler = (e) => {
        e.preventDefault();
        if (password == confirm) {
            dispatch(register(name, email, password));
        } else {
            setMatch('obj')
           
        }
    }
    
        return (
            <Layout>
                <div className='Login container-fluid'>
                    <div className='row'>
                        <div className='col loginImg bg-success'>
                            <img src={"/static/loginimage.png"} alt="headshot" />
                        </div>
                        <div className='col'>

                            <h1>Create an account.</h1>
                            {matchError && !userInfo && <div className='alert alert-danger'>Password inputs did not match. Try again.</div> }
                            {error && <div className='alert alert-danger'>Error with registration. Try again.</div> }
                            {userInfo && <div className='alert alert-success'>Registration successful.</div> }
                            <form onSubmit={submitHandler}>
                                <div class="form-group">
                                    <input type="text" class="form-control" aria-describedby="fullname" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>                                  
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>                                  
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)}/>
                                    <small>Have an account? Log up <Link to='/Login'><u>here</u></Link>.</small>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-dark btn-md">Sign up</button>
                                </div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        )
    }


export default Signup;
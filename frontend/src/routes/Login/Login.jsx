import {React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css'
import Layout from '../../Layout/Layout';
import {Link, useNavigate } from 'react-router-dom';
import { login } from '../../features/userActions';

function Login() {

   

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {error, userInfo} = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))
    }

    //If logged in, dont allow access to login page
    useEffect(() => {
        if(userInfo) {
            navigate('/Account', { replace: true })
        }
    }, [navigate, userInfo])



    return (
        <Layout>
            <div className='Login container-fluid'>
                <div className='row'>
                    <div className='col bg-info loginImg'>
                        <img className='' src={"/static/loginimage.png"} alt="headshot" />
                    </div>
                    <div className='col'>
                        <h1>Log into your account.</h1>
                        {error && <div className='alert alert-danger'>Username or password is incorrect.</div> }
                        {userInfo && <div className='alert alert-success'>Login successful.</div> }
                        <form onSubmit={submitHandler}>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} required/>   
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                                <div>
                                <small>Forgot your password? Reset your password <Link to='/Reset'><u>here</u></Link>.</small>
                                <small>Don't have an account? Sign up <Link to='/SignUp'><u>here</u></Link>.</small>
                                </div>
                                
                            </div>
                            <div>
                                <button type="submit" class="btn btn-dark btn-md">Sign in</button>
                            </div>            
                        </form>
                    </div>
                        
                </div>
            </div>
        </Layout>
    )
}


export default Login;
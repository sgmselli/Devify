import {React, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {update, details, getPremiumAccounts} from '../../features/userActions'
import {Link} from 'react-router-dom';
import {logout} from '../../features/userActions'

import './DetailsProfile.css'

function DetailsProfile() {

    const dispatch = useDispatch()

    //Update from fields
    const [name,
        setName] = useState('');
    const [password,
        setPassword] = useState('');
    const [confirm, setConfirm] = useState('')
    const [matchError, setMatch] = useState('')

    //Load in user details from DB
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdate = useSelector(state => state.userUpdate)
    const {loading, error, userUpdated} = userUpdate

    //Load in premium accounts
    const premiumList = useSelector(state => state.premiumAccounts)
    const { premiumAccounts } = premiumList;

    const premiums = premiumAccounts.map((account) => account.user)

    useEffect(() => {
        dispatch(getPremiumAccounts());
    }, [dispatch])

    useEffect(() => {
        if (userInfo) {
            dispatch(details())
            setName(userInfo.name)
        }

    }, [userInfo, dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (password === confirm) {
            dispatch(update({'id': userInfo.id, 'name': name, 'password':password}));
        } else {
            setMatch('obj')
           
        }
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className='DetailsProfile'>
            <div className='accountDetails'>
                <div className='accountSubh'>
                    <h1>Your account.</h1>
                </div>

                {matchError && !userInfo && <div className='alert alert-danger'>Password inputs did not match</div> }
                {error && <div className='alert alert-danger'>Error with updating your details</div>}
                {userUpdated && <div className='alert alert-success'>Your details have been successfully updated</div>}

                <div >
                    <form onSubmit={submitHandler}>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="fullname"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="tele"
                                placeholder="Change password"
                                onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="tele"
                                placeholder="Confirm changed password"
                                onChange={(e) => setConfirm(e.target.value)} required/>
                        </div>

                        <div className='buttonMiddle'>
                            <button type="submit" class="btn btn-dark btn-md">Change details</button>

                        </div>
                    </form>
                </div>

                <div className='accountDetails'>
                    <div className='accountSubh'>
                        <h1>Log out your Devify.</h1>
                    </div>

                    <Link to='/Login'>
                        <button className='btn btn-danger btn-md' onClick={logoutHandler}>
                            Log out</button>
                    </Link>
                </div>

                <div className='accountDetails'>
                    <div>
                        <h1>Your Premium.</h1>
                    </div>

                    
                    <div className='premiumButtons'>
                        <Link to='/Premium'>
                            <button className='btn btn-info btn-md'>
                                {premiums.includes(userInfo.username) ? "Change plan" : "Get premium"}
                            </button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DetailsProfile;

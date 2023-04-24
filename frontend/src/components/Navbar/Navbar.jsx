import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {logout} from '../../features/userActions'

import './Navbar.css'

function Navbar() {

    const [open,
        setOpen] = useState(false);

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    const handleSidenav = () => {
        if (open) {
            document
                .getElementById("mySidenav")
                .style
                .width = "0";
            setOpen(false);

        } else {
            document
                .getElementById("mySidenav")
                .style
                .width = "100%";
            setOpen(true);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light fixed-top">
                <div className='container-fluid'>
                    <Link to="/" className="navbar-brand">
                        DEVify
                    </Link>
                    <div className='sidenavSec'>
                        <div id="mySidenav" className="sidenav bg-dark">

                            <div className='l'>
                                <ul className="">
                                    
                                    <li className="nav-item">
                                        <Link
                                            to={userInfo
                                            ? '/Account'
                                            : '/Login'}
                                            className="nav-link">
                                            <h2 className="nav-link">mydevify</h2>
                                        </Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link to="/Premium" className="nav-link">
                                            <h2 className="nav-link">Premium</h2>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <svg
                            data-toggle="collapse"
                            className='sideBtn'
                            onClick={handleSidenav}
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="black"
                            class="bi bi-justify"
                            viewBox="0 0 16 16">
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="links navbar-nav mr-auto">

                           

                        </ul>
                        <span className="navbar-text">
                            <ul className="premium navbar-nav mr-auto">
                             
                                <li className="nav-item">
                                    <Link
                                        to={userInfo
                                            ? '/Account'
                                            : '/Login'}
                                            className="nav-link">
                                            <h2 className="nav-link">mydevify</h2>
                                    </Link>
                                </li>

                                  

                                <li className="nav-item">
                                    <Link to="/Premium" className="nav-link">
                                        <button className="btn btn-md btn-dark">Premium
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </span>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ScrollToTop from './Layout/ScrollToTop';

//Routes
import Landing from './routes/Landing/Landing';
import Login from './routes/Login/Login';
import Premium from './routes/Premium/Premium';
import Account from './routes/Account/Account';
import Signup from './routes/Signup/Signup';
import AdminControl from './routes/Admin/AdminControl';
import Waiting from './routes/Waiting/Waiting';

//Redux
import {Provider} from 'react-redux';
import store from './reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={< Landing />}/>
                    <Route path='/Login' Component={Login}/>
                    <Route path='/Premium' element={< Premium />}/>
                    <Route path='/Account' element={< Account />}/>
                    <Route path='/Signup' element={< Signup />}/>
                    <Route path='/Admin/Control' element={< AdminControl />}/>
                    <Route path='/Waiting' element={< Waiting />}/>
                </Routes>
            </ScrollToTop>

        </BrowserRouter>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

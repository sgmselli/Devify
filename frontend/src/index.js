import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

//Routes
import Landing from './routes/Landing/Landing';
import Freelance from './routes/Freelance/Freelance';
import Tutoring from './routes/Tutoring/Tutoring';
import Courses from './routes/Courses/Courses';
import Login from './routes/Login/Login';
import Premium from './routes/Premium/Premium';
import Hire from './routes/Hire/Hire';
import Account from './routes/Account/Account';
import Signup from './routes/Signup/Signup';
import AdminControl from './routes/Admin/AdminControl';
import Waiting from './routes/Waiting/Waiting';
import Reset from './routes/Reset/Reset';

//Redux
import { Provider } from 'react-redux';
import store from './reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Freelance' element={<Freelance/>}/>
        <Route path='/Tutoring' element={<Tutoring/>}/>
        <Route path='/Login' Component={Login}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Premium' element={<Premium/>}/>
        <Route path='/Hire' element={<Hire/>}/>
        <Route path='/Account' element={<Account />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Admin/Control' element={<AdminControl />} />
        <Route path='/Waiting' element={<Waiting />} />
        <Route path='/Reset' element={<Reset />} />
      </Routes>
      
    </BrowserRouter>
   </Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

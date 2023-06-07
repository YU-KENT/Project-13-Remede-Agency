import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from'./components/features/Store'
import Header from './components/containers/Header'
import Footer from './components/containers/Footer'
import SignIn from './components/pages/SignIn'
import UserPage from'./components/pages/UserPage'
import Home from'./components/pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
           <Route exact path='/' element= {<Home />} />
           <Route path='/signin' element= {<SignIn/>}  />
           <Route path='/user/:userName' element={<UserPage />} />
      {/*      <Route path="*" element={<Error/>} /> */}
        </Routes>
       <Footer/>
    </Router>
  </React.StrictMode>
  </Provider>
);


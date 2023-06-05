import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/containers/Header'
import Footer from'./components/containers/Footer'
import Home from'./components/pages/Home'
import 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='/logements/:logementId' element={<SingleLogement />}  />
           <Route path='/Apropos' element={<Apropos />} />
           <Route path="*" element={<Error/>} />
        </Routes>
       <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

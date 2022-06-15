import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Navbar/Home';
import Service from './Navbar/Service';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Header from './Navbar/Header';
import Footer from './Navbar/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App

import React from 'react';
import { NavLink } from "react-router-dom"; 

const Header = () => {
    
    return (
    <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <NavLink to="/" className="navbar-brand">Navbar</NavLink>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link"  style={({isActive}) => ({color: isActive ? 'black' : 'blue'}, { borderBottom:isActive ? '1px solid #565787': null})}   aria-current="page" to="/" >Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" style={({isActive}) => ({color: isActive ? 'black' : 'blue'}, { borderBottom:isActive ? '1px solid #565787': null})} aria-current="page" to="service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" style={({isActive}) => ({color: isActive ? 'black' : 'blue'}, { borderBottom:isActive ? '1px solid #565787': null})} aria-current="page" to="about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link"  style={({isActive}) => ({color: isActive ? 'black' : 'blue'}, { borderBottom:isActive ? '1px solid #565787': null})} aria-current="page" to="contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header

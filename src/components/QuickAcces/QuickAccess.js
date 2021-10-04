import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuickAcces.css'


const QuickAccess = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home" className="link-style">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link-style">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="link-style">Our Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link-style">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/undercons" className="link-style">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/undercons" className="link-style">Become A Online Teacher</NavLink>
                </li>
                <li>
                    <NavLink to="/undercons" className="link-style">Buy A Course</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default QuickAccess;
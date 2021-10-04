import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-dark p-2 mt-3">

            <div className="d-flex justify-content-between px-5">
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
                    </ul>
                </div>
                <div>
                    <ul className="text-end">
                        <li>
                            <NavLink to="/undercons" className="link-style">FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/undercons" className="link-style">Become A Online Teacher</NavLink>
                        </li>
                        <li>
                            <NavLink to="/undercons" className="link-style">Buy A Course</NavLink>
                        </li>
                        <li>
                            <NavLink to="/undercons" className="link-style">Our Refund Policy</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Footer;
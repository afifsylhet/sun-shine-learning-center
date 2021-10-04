import React from 'react';
import { Button } from 'react-bootstrap';
import HomeCourses from '../HomeCourses/HomeCourses';
import { NavLink } from 'react-router-dom';


const Home = () => {
    const imgUrl = "https://i.gifer.com/ZgRn.gif"
    return (
        <div className="d-flex align-items-center row px-2 py-4">
            <div className="px-5 col-lg-6">
                <h1 className="text-primary">WellCome to Sun Shine</h1>
                <h1>Learing Center</h1>
                <p className="py-4">Sun Shine Learning Center is leading learning center in this area. Sun Shine learning center was establish to elemenate unemployment problem in this area. We have reach content and high profile teacher from different countries. So that people love us. If you want to change your current status and make a valuable assect of this country, please don't hasitate to start with us. </p>

                <NavLink to="/undercons">
                    <button className="btn btn-primary p-2"> Click Here To Learn More</button>
                </NavLink>
            </div>
            <div className="col-lg-6 px-2 py-4 d-flex align-items-center justify-content-center">
                <img alt="Money" src={imgUrl}></img>
            </div>
            <HomeCourses></HomeCourses>
        </div >
    );
};

export default Home;
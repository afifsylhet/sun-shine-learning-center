import React from 'react';
import { Link } from 'react-router-dom';
import QuickAccess from '../QuickAcces/QuickAccess';

const UnderCons = () => {
    return (
        <div className="row m-5">
            <div className="col-lg-7 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <br />
                    <h1 className="text-primary m-4 p-4 text-center"> This page is under constration. Thank you for your pitence. </h1>

                    <br />
                    <br />
                    <Link to="/home">
                        <div className="d-flex justify-content-center">

                            <button className="btn btn-primary p-2">Go to Home Page</button>

                        </div>
                    </Link>
                    <br />
                </div>
            </div>
            <div className="col-lg-5 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <h3 className="border-bottom border-3 border-gray text-primary">Quick Access</h3>
                    <QuickAccess></QuickAccess>
                </div>
            </div>
        </div >
    );
};

export default UnderCons;
import React from 'react';
import './Teacher.css'
import { NavLink } from 'react-router-dom';


const Teacher = (props) => {
    const { author, role, authorImg, authorExp, authorSchool, authorStudyField } = props.course;
    // console.log(props.course)
    return (
        <div className="col-md-4 col-lg-3 col-sm-12 g-4 text-center">
            <div className="card card-height">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={authorImg} className="img-style text-center m-2" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{author}</h5>
                    <h6 className="text-muted">{role}</h6>

                    <p className="my-2"> {author} have {authorExp} years experience in this field as well as completed {authorStudyField} post-gradudation from{authorSchool}. </p>
                </div>
                <div className="p-3 bg-light">
                    <span className="px-3 fs-3 text-primary"><i class="fab fa-facebook-square"></i></span>
                    <span className="px-3 fs-3 text-primary"><i class="fab fa-instagram-square"></i></span>
                    <span className="px-3 fs-3 text-primary"><i class="fab fa-twitter-square"></i></span>
                    <span className="px-3 fs-3 text-primary"><i class="fab fa-pinterest-square"></i></span>
                </div>
            </div>
        </div>
    );
};



export default Teacher;
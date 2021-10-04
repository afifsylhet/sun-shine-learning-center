import React from 'react';
import Rating from 'react-rating';
import '../HomeCourse/HomeCourse.css';
import { NavLink } from 'react-router-dom';


const Service = (props) => {
    const { title, price, ratings, duration, lacture, courseImg, author } = props.course;
    // console.log(props.course)
    return (
        <div className="col-md-4 col-lg-3 col-sm-12 g-4">
            <div className="card">
                <img src={courseImg} className="card-img-top height" alt="..." />
                <div className="card-body">
                    <h6 className="text-muted">By {author}</h6>
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="text-primary">
                        <Rating
                            initialRating={ratings}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        /> <span className="ms-3 fw-bold">Rating Point: {ratings}</span>
                    </p>
                    <hr />
                    <p>
                        <i class="far fa-clock"></i> <span className="pe-2">{duration} Hours</span>
                        <i class="fas fa-folder-open"></i> <span className="pe-2">{lacture} Lacture</span>
                        Price: ${price}
                    </p>
                    <NavLink to="/undercons">
                        <button className="btn btn-secondary w-100 py-3">Show Details</button>
                    </NavLink>
                </div>
            </div>
        </div >
    );
}

export default Service;
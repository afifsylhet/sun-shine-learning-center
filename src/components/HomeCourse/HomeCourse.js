import React from 'react';
import Rating from 'react-rating';
import './HomeCourse.css'

const HomeCourse = (props) => {
    const { title, price, ratings, duration, lacture, courseImg, author } = props.course;
    // console.log(props.course)
    return (
        <div className="col-md-4 col-lg-3 col-sm-12 g-4">
            <div className="card">
                <img src={courseImg} className="card-img-top height" alt="..." />
                <div className="card-body">
                    <h6 className="text-muted">By {author}</h6>
                    <h5 className="card-title">{title}</h5>
                    <p>
                        <Rating
                            initialRating={ratings}
                            readonly
                        />
                    </p>
                    <hr />
                    <p>
                        <i class="far fa-clock"></i> <span className="pe-2">{duration} Hours</span>
                        <i class="fas fa-folder-open"></i> <span className="pe-2">{lacture} Lacture</span>
                        Price: ${price}
                    </p>
                    <button className="btn btn-secondary w-100 py-3">Show Details</button>
                </div>
            </div>
        </div >
    );
}

export default HomeCourse;
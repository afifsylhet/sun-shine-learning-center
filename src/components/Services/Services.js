import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="p-4">
            <div className="bg-light">
                <h3 className="text-primary p-3
             text-center fw-bold">Take a look to our latest Course</h3>
                <p>Sun Shine Learning Center is leading learning center in this area. Sun Shine learning center was establish to elemenate unemployment problem in this area. We have reach content and high profile teacher from different countries. So that people love us. If you want to change your current status and make a valuable assect of this country, please don't hasitate to start with us.</p>
            </div>

            <div className="row">
                {
                    courses.map(course => <Service
                        key={course.Id}
                        course={course}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;
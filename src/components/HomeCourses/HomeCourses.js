import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';

const HomeCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const newCourses = courses.slice(4, 10)
    return (
        <div className="p-4">
            <h2 className="text-primary p-3
             text-center">Take a look to our latest Course</h2>
            <div className="row">
                {
                    newCourses.map(course => <HomeCourse
                        key={course.Id}
                        course={course}>
                    </HomeCourse>)
                }
            </div>
        </div>
    );
};

export default HomeCourses;
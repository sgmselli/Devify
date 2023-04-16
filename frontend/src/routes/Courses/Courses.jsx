import {React, useState, useEffect} from 'react';
import Layout from '../../Layout/Layout';
import './Courses.css'
import axios from 'axios';

function Courses() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        async function getCourses() {
            const data = await axios.get('/api/names/')
            setCourses(data.data)
        }
        getCourses()        
    }, [])

    return (
        <Layout>
            <div className='Courses'>
                <ul>
                    {(courses).map(course => {
                        return <li>id: {course.id}, name: {course.name}</li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Courses;
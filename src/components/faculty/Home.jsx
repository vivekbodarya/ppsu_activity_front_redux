import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Tabs from './body/home/Tabs'
import { Loader, noClass, noSchool } from '../constant/constant'

const Home = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)
    return (
        <div className="container main_container mt-5">
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-10">
                    <h3 className="mb-0">Activity</h3>
                </div>
            </div>

            <div className='row'>
                <section className='tabs_content_block'>
                    {
                        facultyReducer.faculty_profile_dataIsLoaded === true
                            ? !facultyReducer.facultyProfile.school?.id && !facultyReducer.facultyProfile.school?.name
                                ? noSchool()
                                : facultyReducer.facultyProfile.class.length === 0
                                    ? noClass()
                                    : facultyReducer.activity_faculty_dataIsLoaded === true
                                        ? <Tabs />
                                        : Loader()
                            : Loader()
                    }
                </section>
            </div>
        </div>
    )
}

export default Home
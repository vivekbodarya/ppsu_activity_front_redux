import React from 'react'
import students_grp from '../../../assets/img/students_grp.svg'
import cc_grp from '../../../assets/img/cc_grp.svg'
import apc from '../../../assets/img/classes.svg'
import ManageCategory from './collaps_card/manage_heading/ManageCategory'
import ManageSchool from './collaps_card/manage_school/ManageSchool'
import ManageDean from './collaps_card/manage_dean/ManageDean'


const ManagePeople = () => {
    return (
        <div className='col-12 container'>
            <div className="row">

                {/* cc */}
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsManageschool" aria-expanded="false" aria-controls="collapsManageschool" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={cc_grp} height="70px" width="100px" alt='ppsu' />
                                <div className='mt-1 ml-2'>
                                    <p>Manage</p>
                                    <h5><strong>School</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsManageheading" aria-expanded="false" aria-controls="collapsManageheading" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={students_grp} height="70px" width="100px" />
                                <div className='mt-1 ml-3'>
                                    <p>Manage</p>
                                    <h5><strong>Heading</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsManagedean" aria-expanded="false" aria-controls="collapsManagedean" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="70px" width="90px" />
                                <div className='mt-1 ml-3'>
                                    <p>Manage</p>
                                    <h5><strong>Dean</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* class cordinator collaps */}
            <div className="mt-5 abscollapse multi-collapse show" id="collapsManageschool" >
                <div className="row" >
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <ManageSchool />
                    </div>
                </div>
            </div>

            {/* class cordinator collaps */}
            <div className="mt-5 collapse multi-collapse" id="collapsManageheading" >
                <div className="row" >
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <ManageCategory />
                    </div>
                </div>
            </div>

            {/* class cordinator collaps */}
            <div className="mt-5 collapse multi-collapse" id="collapsManagedean" >
                <div className="row" >
                    <div className='col-sm-12 col-md-12 col-lg-12 mb-4'>
                        <ManageDean />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ManagePeople
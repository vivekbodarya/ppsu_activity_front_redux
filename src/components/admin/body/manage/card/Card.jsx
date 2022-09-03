// Images
import apc from '../../../../assets/img/apc.svg'
import activity from '../../../../assets/img/manageActivity.jpg'
import selectActivity from '../../../../assets/img/selectActivity.jpg'
import ManageActivity from '../collpas/manageActivity/ManageActivity'


import CreateApc from '../collpas/manageApc/CreateApc'
import ManageApc from '../collpas/manageApc/ManageApc'
import OurActivity from '../collpas/selectActivity/OurActivity'
import SelectActivity from '../collpas/selectActivity/SelectActivity'

const Card = () => {
    return (
        <>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsManageapc" aria-expanded="false" aria-controls="collapsManageapc" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="90px" width="100px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h6>Manage</h6>
                                    <h5><strong>Coordinators (APC)</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsselectActivity" aria-expanded="false" aria-controls="collapsselectActivity" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={selectActivity} height="90px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h6>Select</h6>
                                    <h5><strong>Activity</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsManageActivity" aria-expanded="false" aria-controls="collapsManageapc" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={activity} height="90px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h6>Manage</h6>
                                    <h5><strong>Activity</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mt-5 collapse multi-collapse" id="collapsManageapc" >
                <div className="row" >
                    <div className='col-sm-12 col-md-6 col-lg-8'>
                        <ManageApc />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <CreateApc />
                    </div>
                </div>
            </div>

            <div className="mt-5 collapse multi-collapse" id="collapsselectActivity" >
                <div className="row" >
                    <div className='col-sm-12 col-md-6 col-lg-8'>
                        <SelectActivity />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <OurActivity />
                    </div>
                </div>
            </div>

            {/* manage Activity collaps */}
            <div className="mt-5 collapse multi-collapse" id="collapsManageActivity" >
                <div className="row" >
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <ManageActivity />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card
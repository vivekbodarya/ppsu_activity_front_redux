// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS } from '../../../../redux/subAdmin/action/action';
import { errHandle, successHandle } from '../../../constant/errHandling';
import { useState } from 'react';

const View = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)
    // Using UseForm to get All feild data (not file upload)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // For PDF View
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Wrapped
                    );
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageWidth);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    const [updateState, steUpdateState] = useState(false)
    const onSubmit = (data) => {
        console.log(data)
        dispatch({ type: REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS, payload: data })
        steUpdateState(true)

    }
    if (apcReducer.patch_req_status_chnage_success === true && updateState === true) {
        successHandle("Chnage Status SuccessFully! 😎")
        steUpdateState(false)
        window.location.reload()
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    {/* <h5 className="mb-4">{data.heading.categoryName}</h5> */}
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                    <span className="font_title_viewpage">Publish Date :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.publishDate.split("T")[0]}</span>

                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                    <span className="font_title_viewpage">Student Total Points :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.totalPoint}</span>

                </div>
                {
                    data.status === "Approved" ?
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                            <span className="font_title_viewpage">Approve Date :&nbsp;&nbsp;</span>
                            <span className="font_value_viewpage">{data.approvedDate.split("T")[0]}</span>

                        </div> : ''
                }
                {
                    data.status === "Completed" ?
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                            <span className="font_title_viewpage">Completed Date :&nbsp;&nbsp;</span>
                            <span className="font_value_viewpage">{data.completedDate.split("T")[0]}</span>

                        </div> : ''
                }
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                    <span className="font_title_viewpage">Status :&nbsp;&nbsp;</span>
                    <span className={`status_${data.status}`}>{data.status}</span>

                </div>
            </div>


            <div className="row mt-3">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                    <span className="font_title_viewpage">Student Name :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.name}</span>

                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                    <span className="font_title_viewpage">Enrollment Number :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.enrollmentNo}</span>

                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h6 className="">Activity Request</h6>
                </div>
            </div>
            <hr />


            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">

                    <div className="mb-4 mt-4 form-group row" data-toggle="tooltip" data-placement="top" title="Heading id _ Heading Name">
                        <span className="col-sm-12 col-md-2 font_title_viewpage">Heading: </span>
                        <div className="ml-3 heading_show col-md-8 col-sm-12">{data.heading?.categoryId}_{data.heading?.categoryName}</div>
                    </div>

                    <div className="mb-4 mt-4 form-group row">
                        <span className="col-sm-12 col-md-2 font_title_viewpage">Heading Description: </span>
                        <div className="ml-3 heading_show col-md-8 col-sm-12">{data.heading?.description}</div>
                    </div>

                    <div className='mb-4 mt-4 form-group row'>
                        <label className="font_title_viewpage col-sm-12 col-md-2">Description: </label>
                        <textarea
                            type="text"
                            name="description"
                            className="form-control ml-3 d-flex col-md-8 col-sm-12"
                            rows={8}
                            disabled
                            defaultValue={data.discription}
                        ></textarea>
                        <span className="text-danger"></span>
                    </div>
                    <div>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                            <div style={{ height: "600px" }}>
                                <Viewer fileUrl={`http://43.205.206.37:3006/getFile${data.document}`} plugins={[defaultLayoutPluginInstance]} />
                            </div>
                        </Worker>
                    </div>
                </div>



                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card" style={{ borderRadius: '15px' }}>
                        <div className="card-body details_point_remark">
                            <h5 className="card-title">Details</h5>
                            {/* For the details */}
                            {
                                data.status === 'Approved'
                                    ?
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">

                                        <div className='mb-4 mt-4'>
                                            <label>Remark<small> (Faculty to Student)</small></label>
                                            <input
                                                type="text"
                                                name="fts"
                                                className="form-control"
                                                disabled
                                                defaultValue={data.message[0]?.fts}
                                            />
                                            <span className="text-danger"></span>
                                        </div>

                                        <div className='mb-4 mt-4'>
                                            <input
                                                type="hidden"
                                                className="form-control"
                                                value={apcReducer.apcProfile._id}
                                                {...register("changedBy")}
                                            />
                                        </div>

                                        <div className='mb-4 mt-4'>
                                            <input
                                                type="hidden"
                                                className="form-control"
                                                value={props.data._id}
                                                {...register("_id")}
                                            />
                                        </div>

                                        <div className='mb-4 mt-4'>
                                            <input
                                                type="hidden"
                                                className="form-control"
                                                value={props.data.student._id}
                                                {...register("student")}
                                            />
                                        </div>

                                        <div className='mb-4 mt-4'>
                                            <input
                                                type="hidden"
                                                className="form-control"
                                                value="Admin"
                                                {...register("level")}
                                            />
                                        </div>

                                        <label>Status</label><br />
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                value="Completed"
                                                {...register("status", {
                                                    required: true
                                                })} />
                                            <label className="form-check-label" >&nbsp;Completed</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                value="Revised"
                                                {...register("status", {
                                                    required: true
                                                })} />
                                            <label className="form-check-label">&nbsp;Revised</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                value="Rejected"
                                                {...register("status", {
                                                    required: true
                                                })} />
                                            <label className="form-check-label">&nbsp;Rejected</label>
                                        </div>
                                        <span className="text-danger">{errors.status?.type === 'required' && "Status is required!"}</span>



                                        <div className='mb-4 mt-4'>
                                            <label>Remark<small> (student)</small></label>
                                            <input
                                                type="text"
                                                name="ats"
                                                className="form-control"
                                                defaultValue={data.message[0]?.ats}
                                                {...register("ats")}
                                            />
                                            <span className="text-danger"></span>
                                        </div>


                                        <div className='mb-0 mt-4'>
                                            <label>Remark<small> (Class Coordinator)</small></label>
                                            <input
                                                type="text"
                                                name="atf"
                                                className="form-control"
                                                defaultValue={data.message[0]?.atf}
                                                {...register("atf")}
                                            />
                                            <span className="text-danger"></span>
                                        </div>
                                        {
                                            apcReducer.patch_req_status_chnage_progress === true
                                                ? <button className="btn submit-btn mt-5" disabled>Loading..</button>
                                                : <button type="submit" className="btn submit-btn mt-5">Submit</button>
                                        }

                                    </form>


                                    : data.status === 'Completed' ?

                                        <div>
                                            <p className="card-text mt-4">Point for this Activity</p>
                                            <h5>{data.status === "Completed" ? 10 : 0}</h5>

                                            <div className='mb-4 mt-5'>
                                                <label>Remark<small> (Faculty to Student)</small></label>
                                                <input
                                                    type="text"
                                                    name="fts"
                                                    className="form-control"
                                                    disabled
                                                    defaultValue={data.message[0]?.fts}
                                                />
                                                <span className="text-danger"></span>
                                            </div>

                                            <div className='mb-4 mt-4'>
                                                <label>Remark<small> (student)</small></label>
                                                <input
                                                    type="text"
                                                    name="student_remark"
                                                    className="form-control"
                                                    defaultValue={data.message[0]?.ats}
                                                    disabled
                                                />
                                                <span className="text-danger"></span>
                                            </div>

                                            <div className='mb-0 mt-4'>
                                                <label>Remark<small> (Higher Authority)</small></label>
                                                <input
                                                    type="text"
                                                    name="apc_remark"
                                                    className="form-control"
                                                    defaultValue={data.message[0]?.atf}
                                                    disabled
                                                />
                                                <span className="text-danger"></span>
                                            </div>
                                        </div>

                                        :

                                        <div>
                                            <p className="card-text mt-4">Point for this Activity</p>
                                            <h5>0</h5>
                                            <div className="alert alert-warning mt-4" role="alert">
                                                <li>Request in <strong>Pending/Revise</strong> Status!</li><br />
                                                <li>Contatct to Respective faculty for Change Status!</li>
                                            </div>

                                        </div>
                            }


                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default View
// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS } from '../../../../redux/faculty/action/action';
import { useState } from 'react';
import { successHandle } from '../../../constant/errHandling';

const View = (props) => {
    const { data } = props
    console.log(data)
    const dispatch = useDispatch()
    const facultyReducer = useSelector(state => state.facultyReducer)
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
        dispatch({ type: REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS, payload: data })
        steUpdateState(true)
    }
    // Show Status to End User
    if (facultyReducer.patch_req_status_chnage_success === true && updateState === true) {
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

                    <span className="font_title_viewpage">Total Points :&nbsp;&nbsp;</span>
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
                        <div className="ml-3 mr-3 heading_show col-md-8 col-sm-12">{data.heading.categoryId}_{data.heading.categoryName}</div>
                    </div>

                    <div className="mb-4 mt-4 form-group row">
                        <span className="col-sm-12 col-md-2 font_title_viewpage">Heading Description: </span>
                        <div className="ml-3 mr-3 heading_show col-md-8 col-sm-12">{data.heading.description}ghceg hcwc hvcwh</div>
                    </div>

                    <div className='mb-4 mt-4 form-group row'>
                        <label className="font_title_viewpage col-sm-12 col-md-2">Student Description: </label>
                        <textarea
                            type="text"
                            name="description"
                            className="form-control ml-3 mr-3 d-flex col-md-8 col-sm-12"
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
                                data.status === 'Pending' || data.status === 'Revised'
                                    ?
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">

                                        <div className='mb-4 mt-4'>
                                            <input
                                                type="hidden"
                                                className="form-control"
                                                value={facultyReducer.facultyProfile._id}
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
                                                value="Faculty"
                                                {...register("level")}
                                            />
                                        </div>

                                        <label>Status</label><br />
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                value="Approved"
                                                {...register("status", {
                                                    required: true
                                                })} />
                                            <label className="form-check-label" >&nbsp;Approved</label>
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
                                                name="fts"
                                                className="form-control"
                                                defaultValue={data.message[0]?.fts}
                                                {...register("fts")}
                                            />
                                            <span className="text-danger"></span>
                                        </div>


                                        <div className='mb-0 mt-4'>
                                            <label>Remark<small> (Higher Authority)</small></label>
                                            <input
                                                type="text"
                                                name="fta"
                                                className="form-control"
                                                defaultValue={data.message[0]?.fta}
                                                {...register("fta")}
                                            />
                                            <span className="text-danger"></span>
                                        </div>
                                        <button type="submit" className="btn submit-btn mt-5">Submit</button>
                                    </form>


                                    :


                                    <div>
                                        <p className="card-text mt-4">Point for this Activity</p>
                                        <h5>{data.status === "Completed" ? 10 : 0}</h5>


                                        <div className='mb-4 mt-5'>
                                            <label>Remark<small> (Student)</small></label>
                                            <input
                                                type="text"
                                                name="student_remark"
                                                className="form-control"
                                                defaultValue={data.message[0]?.fts}
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
                                                defaultValue={data.message[0]?.fta}
                                                disabled
                                            />
                                            <span className="text-danger"></span>
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
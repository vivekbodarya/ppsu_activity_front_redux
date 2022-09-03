import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { errHandle, successHandle } from '../../../../../constant/errHandling'
import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_POST_CREATE_CLASS_PROGRESS
} from '../../../../../../redux/subAdmin/action/action'

const CreateClass = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_POST_CREATE_CLASS_PROGRESS, payload: { data } })
        setStatus(true)
    }
    if (apcReducer.add_apc_class_status === true && status === true) {
        successHandle("Class Added Succesffully! 😎")
        setValue('name', '');
        setValue('betch', '');
        setStatus(false)
    }
    if (apcReducer.add_apc_class_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    // var year = (new Date()).getFullYear();

    return (

        <div className="card instadmin_home_card p-3">
            <h5 className="pl-3 mt-4">Add Class</h5>
            <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-4 mt-2 '>
                        <label>Name<span className='text-danger'> *</span></label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            {...register("name", {
                                required: true,
                                pattern: /^[A-Z_]*$/
                            })}
                        />
                        <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                        <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase or '_' letters in a row!"}</span>
                    </div>

                    <div className='mb-4 mt-2 '>
                        <label>Batch</label>
                        <input
                            type="number"
                            name="betch"
                            className="form-control"
                            // defaultValue={year}
                            {...register("betch", {
                                required: true
                            })}
                        />
                        <span className="text-danger">{errors.betch?.type === 'required' && "Batch is required!"}</span>
                    </div>

                    {/* <div className='mb-4 mt-2 '>
                        <input
                            type="hidden"
                            name="betch"
                            defaultValue={year}
                            className="form-control"
                            {...register("betch", {
                                required: true
                            })}
                        />
                    </div> */}

                    <div className='mb-4 mt-2 '>
                        <input
                            type="hidden"
                            name="school"
                            defaultValue={apcReducer.apcProfile.school._id}
                            className="form-control"
                            {...register("school", {
                                required: true
                            })}
                        />
                    </div>
                    {
                        apcReducer.add_apc_create_class_progress === true
                            ? <div className="mt-5">
                                <button className="btn submit-btn" disabled>Loading..</button>
                            </div>
                            : <div className="mt-5">
                                <button type="submit" className="btn submit-btn">Submit</button>
                            </div>
                    }

                </form>
            </div>

        </div>
    )
}

export default CreateClass
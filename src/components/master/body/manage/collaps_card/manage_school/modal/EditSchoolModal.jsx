import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_SCHOOL_PROGRESS } from "../../../../../../../redux/coe/action/action";
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

const EditSchoolModal = (props) => {

    // console.log(props.data)
    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)

    const [status, setStatus] = useState(false)

    const [state, setState] = useState({
        "name": props.data.name
    })

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    setValue("_id", props.data._id)
    setValue("name", props.data.name)

    const onSubmit = (e) => {

        const data = {
            '_id': e._id,
            'name': e.name
        }
        console.log(data)
        dispatch({ type: REQ_FOR_PATCH_SCHOOL_PROGRESS, payload: { data } })
        setStatus(true)


    }

    if (coeReducer.patch_coe_school_status === true && status === true) {
        successHandle("school Updated Succesffully! 😎")
        setStatus(false)
        window.location.reload()
    }
    if (coeReducer.patch_coe_school_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    const handleValue = (e) => {
        setState({ [e.target.name]: e.target.value })
    }


    if (coeReducer.getSchool_dataIsLoaded === true) {
        return (
            <>
                <div className="modal fade" id={`edit${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.name}label`} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update School</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='mb-4 mt-2 '>
                                        <label>School Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            {...register("name", {
                                                required: true,
                                            })}
                                            onChange={handleValue}
                                            value={state.name}
                                        />
                                        <span className="text-danger">{errors.name?.type === 'required' && "School Name is required!"}</span>
                                    </div>

                                    <div className="mt-5 d-flex justify-content-end">
                                        <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn submit-btn">Update</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        <>
            Loading..
        </>
    }
}

export default EditSchoolModal
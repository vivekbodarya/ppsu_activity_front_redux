import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_DEAN_PROGRESS } from "../../../../../../../redux/coe/action/action";
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

const EditDeanModal = (props) => {

    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)
    const [data, setData] = useState({
        name: '',
        username: '',
        password: ''
    })
    // Err
    const [err, setErr] = useState({
        all: '',
    })
    useEffect(() => {
        // TODO
        // Update through _id not Username
        setData({
            name: props.data ? props.data.admin.name : '',
            username: props.data ? props.data.admin.username : '',
            password: props.data ? props.data.admin.password : ''
        })
    }, [props])
    const [status, setStatus] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (data.username != '' && data.name != '' && data.password != '') {
            setErr({ all: '' })
            dispatch({ type: REQ_FOR_PATCH_DEAN_PROGRESS, payload: { data } })
            setStatus(true)
        } else {
            setErr({
                all: 'All field are Required!',
            })
        }
    }

    if (coeReducer.patch_coe_dean_status === true && status === true) {
        successHandle("Dean Updated Succesffully! 😎")
        setStatus(false)
        window.location.reload()
    }
    if (coeReducer.patch_coe_dean_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    const handleValue = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
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
                                {
                                    err.all == ''
                                        ? ''
                                        : <div className="alert alert-danger" role="alert">
                                            {err.all}
                                        </div>
                                }

                                <form
                                    onSubmit={onSubmit}
                                >

                                    <div className='mb-4 mt-2 '>
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            defaultValue={data.name}
                                            onChange={handleValue}
                                        />
                                    </div>

                                    <div className='mb-4 mt-2 '>
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            className="form-control"
                                            defaultValue={data.password}
                                            onChange={handleValue}
                                        />
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

export default EditDeanModal
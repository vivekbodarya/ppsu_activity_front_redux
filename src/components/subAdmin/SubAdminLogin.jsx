import ppsu_logo from '../assets/img/ppsu_logo.png'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_LOGIN_PROGRESS_APC } from '../../redux/login/subAdmin/action';
import { errHandle, successHandle } from '../constant/errHandling';
import { useState } from 'react';
const SubAdminLogin = () => {
    const apcLogin = useSelector(state => state.apcLogin)
    const dispatch = useDispatch()
    // For Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    // This is for validation and use for validation in if condition
    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {

        dispatch({ type: REQ_FOR_LOGIN_PROGRESS_APC, payload: { data } })
        setStatus(true)
    }
    // This is for validation and message show for End-User
    if (apcLogin.login_progress === false && apcLogin.login_auth_failed === true && status === true) {
        errHandle("Auth Failed! 🤦‍♂️")
        setStatus(false)
    }
    if (apcLogin.login_progress === false && apcLogin.login_status_success === true && status === true) {
        successHandle("Auth Success! 🤦‍♂️")
        setStatus(false)
    }
    if (apcLogin.login_progress === false && apcLogin.login_error === true && status === true) {
        errHandle("Somthing went wrong..Try again later! 😏")
        setStatus(false)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-3"></div>
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className='mt-5 mb-5 login_section'>
                            <div className='justify-content-center d-flex pt-5'>
                                <img src={ppsu_logo} alt="ppsu" className='' />
                            </div>
                            <form className='p-5' onSubmit={handleSubmit(onSubmit)}>


                                <div className='mb-4 mt-5 '>
                                    <label>UserID<span className='text-danger'> *</span></label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        {...register("username", {
                                            required: true,
                                        })}
                                    />
                                    <span className="text-danger">{errors.username?.type === 'required' && "UserId is required!"}</span>
                                </div>


                                <div className='mb-4 mt-5 '>
                                    <label>Password<span className='text-danger'> *</span></label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                    <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                                </div>

                                {
                                    SubAdminLogin.login_progress === true ?
                                        <button className="btn submit-btn mt-4 mb-5" disabled>Loading..</button>
                                        : <button type="submit" className="btn submit-btn mt-4 mb-5">Submit</button>
                                }


                            </form>


                        </div>
                        <div className="alert alert-info mb-4" role="alert">
                            <strong>Notice</strong>
                            <li>If you don't remember your password, Please contact respective coordinator!</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubAdminLogin
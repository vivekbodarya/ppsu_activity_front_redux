import { useState } from "react";
import { useForm } from "react-hook-form";
const ChnagePassword = () => {

    const [err, SetErr] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const chnagePassword = (data) => {
        if (data.newPassword === data.confirmPassword) {
            console.log(data)
            SetErr("")
        }
        else {
            SetErr("Password Not Match!")
        }
    }
    return (
        <>
            <form className="mt-5" onSubmit={handleSubmit(chnagePassword)}>

                <div className='mb-5 mt-2 '>
                    <label>Old Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="oldPassword"
                        className="form-control"
                        {...register("oldPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.oldPassword?.type === 'required' && "Old Password is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>New Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="newPassword"
                        className="form-control"
                        {...register("newPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.newPassword?.type === 'required' && "New Password is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Confirm New Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="confirmPassword"
                        className="form-control"
                        {...register("confirmPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.confirmPassword?.type === 'required' && "Confirm New Password is required!"}</span>
                    <span className="text-danger">{err}</span>
                </div>

                <button type="sumit" className="btn submit-btn">Update</button>
            </form>
        </>
    )
}
export default ChnagePassword
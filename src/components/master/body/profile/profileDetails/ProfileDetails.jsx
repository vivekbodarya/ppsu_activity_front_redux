import { useSelector } from "react-redux"

const ProfileDetails = () => {

    const coeReducer = useSelector(state => state.coeReducer)
    return (
        <>
            <div className='mb-4 mt-2 '>
                <label>User Name</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={coeReducer.coeProfile[0].username}
                    disabled
                />
            </div>
        </>
    )
}
export default ProfileDetails
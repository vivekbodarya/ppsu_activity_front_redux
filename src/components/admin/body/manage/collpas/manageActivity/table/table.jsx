import { useSelector, useDispatch } from "react-redux"
import { REQ_FOR_DELETE_HEADING_PROGRESS } from "../../../../../../../redux/admin/action/action"
const Table = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const deleteActivity = (data) => {
        dispatch({ type: REQ_FOR_DELETE_HEADING_PROGRESS, payload: data._id })
    }
    return (
        <>
            <div className='table-responsive  mt-5'>
                <table className="table data-table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Category</th>
                            <th scope="col">Activity Name</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {instAdminReducer.instadminActivity?.map((data, ind) => {
                            if (data.addedBy._id === instAdminReducer.adminProfile.school._id)
                                return (
                                    <tr key={ind}>
                                        <td className='text-center'>{data.categoryId}</td>
                                        <td className='text-center'>{data.categoryName}</td>
                                        <td className='text-center'>
                                            {
                                                data.isApproved == "Approved"
                                                    ? <span className="status_Approved">{data.isApproved}</span>
                                                    : data.isApproved == "Pending"
                                                        ? <span className="status_Pending">{data.isApproved}</span>
                                                        : ""
                                            }
                                        </td>
                                        <td className='text-center'>

                                            {
                                                data.isApproved !== "Approved"
                                                    ? <div className='btn-group'>
                                                        {/* <span className='mr-4'><i className='bx bxs-edit-alt'></i></span> */}
                                                        <span><i className='bx bxs-trash ml-auto' onClick={() => deleteActivity(data)}></i></span>
                                                    </div>
                                                    : ""
                                            }

                                        </td>
                                    </tr>
                                )
                            else
                                return (
                                    <></>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table
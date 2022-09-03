import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_DELETE_APC_PROGRESS } from '../../../../../../../redux/admin/action/action'
import EditApcModel from '../model/EditApcModel'

const ManageApcTable = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [apcId, setApcId] = useState("")
    const apcDelete = (data) => {
        dispatch({ type: REQ_FOR_DELETE_APC_PROGRESS, payload: data })
    }

    return (
        <>
            <div className='table-responsive-sm mt-5'>
                <table className="table data-table ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Index</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instAdminReducer.getApc_instadmin?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row" className='text-center'>{index + 1}</th>
                                        <td className='text-center'>{data.username}</td>
                                        <td className='text-center'>{data.name}</td>
                                        <td className='text-center'>
                                            <div className='btn-group'>
                                                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#model${data.name}`} onClick={() => setApcId(data)}></i></span>
                                                <span><i className='bx bxs-trash ml-auto' onClick={() => apcDelete(data._id)}></i></span>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <EditApcModel data={apcId} />
        </>
    )
}
export default ManageApcTable
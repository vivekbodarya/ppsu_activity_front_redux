import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_DELETE_DEAN_PROGRESS } from '../../../../../../../redux/coe/action/action'
import EditSchoolModal from '../modal/EditDeanModal'


const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    const dispatch = useDispatch()
    // console.log(coeReducer)

    const [deanEdit, setdeanEdit] = useState("")

    const deleteDean = (data) => {
        dispatch({ type: REQ_FOR_DELETE_DEAN_PROGRESS, payload: data })
        // window.location.reload()
    }

    return (

        <div className='table-responsive-sm mt-5'>
            <table className="table data-table text-center">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Profile</th>
                        <th scope="col">Name</th>
                        <th scope="col">School Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coeReducer.coeSchool?.result?.map((data, index) => {
                            return (
                                data.admin != null ?
                                    <tr key={index}>
                                        <th scope="row" >{index + 1}</th>
                                        <td><img src={`http://43.205.206.37:3006/getFile${data.admin?.image}`} className='img-fluid' width={50} height={50} alt='ppsu' style={{ borderRadius: '50%' }} /></td>
                                        <td>{data.admin?.name}</td>
                                        <td>{data.name}</td>
                                        <td>
                                            <div className='btn-group'>
                                                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${data.name}`} onClick={() => setdeanEdit(data)}></i></span>
                                                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteDean(data.admin?.username)}></i></span>
                                            </div>
                                        </td>
                                    </tr> : ''
                            )
                        })
                    }
                </tbody>
            </table>
            <EditSchoolModal data={deanEdit} />
        </div>

    )
}


export default Table
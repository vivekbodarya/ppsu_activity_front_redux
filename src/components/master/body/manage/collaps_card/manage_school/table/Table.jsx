import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_DELETE_SCHOOL_PROGRESS } from '../../../../../../../redux/coe/action/action'
import EditSchoolModal from '../modal/EditSchoolModal'


const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    const dispatch = useDispatch()
    // console.log(coeReducer)

    const [schoolEdit, setschoolEdit] = useState({})

    const deleteSchool = (data) => {
        dispatch({ type: REQ_FOR_DELETE_SCHOOL_PROGRESS, payload: data })
        window.location.reload()
    }

    return (

        <div className='table-responsive mt-5'>
            <table className="table data-table text-center">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">School Name</th>
                        <th scope="col">Total Student</th>
                        <th scope="col">Total Faculty</th>
                        <th scope='col'>Total APC</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        coeReducer.coeSchool?.result?.map((data, index) => {
                            {/* console.log(data) */ }
                            return (
                                <tr key={index}>
                                    <th scope="row" >{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.totalStudent}</td>
                                    <td>{data.totalFaculty}</td>
                                    <td>{data.totalCommittee}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${data.name}`} onClick={() => setschoolEdit(data)}></i></span>
                                            <span><i className='bx bxs-trash ml-auto' onClick={() => deleteSchool(data._id)}></i></span>
                                        </div>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <EditSchoolModal data={schoolEdit} />
        </div>

    )
}


export default Table
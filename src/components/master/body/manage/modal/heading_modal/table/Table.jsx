import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ApproveModel from '../modal_body/ApproveModel'


const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    const dispatch = useDispatch()
    // console.log(coeReducer)

    const [ApproveData, setApproveData] = useState("")

    return (

        <div className='table-responsive-sm mt-5'>
            <table className="table data-table text-center">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Category Id</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">School</th>
                        <th scope="col">isApproved</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        coeReducer.coeHeading?.map((data, index) => {
                            console.log(data.isApproved)
                            return (
                                <tr key={index}>
                                    <th scope="row" >{index + 1}</th>
                                    <td>{data.categoryId}</td>
                                    <td>{data.categoryName}</td>
                                    <td >{data.addedBy?.name}</td>
                                    <td ><span className={`status_${data.isApproved.toString()}`}>{data.isApproved.toString()}</span></td>
                                    <td>
                                        <div className='btn-group'>
                                            <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${data.categoryName}`} onClick={() => setApproveData(data)} ></i></span>
                                            {/* <span><i className='bx bxs-trash ml-auto' onClick={() => deleteClass(data)}></i></span> */}
                                        </div>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <ApproveModel data={ApproveData} />
        </div>

    )
}


export default Table
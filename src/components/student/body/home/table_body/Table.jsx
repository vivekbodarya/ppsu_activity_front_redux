import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import empty_data from '../../../../assets/img/empty_data.svg'
import { REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS } from '../../../../../redux/student/action/action'
const Table = (props) => {

    const studentReqReducer = useSelector(state => state.studentReducer)
    let i = 0
    const dispatch = useDispatch()

    const delete_req = (e) => {
        const data = e
        dispatch({ type: REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS, payload: data })
    }


    // if (studentReqReducer.dataIsLoaded === true) {
    return (
        <>
            <div className='table-responsive-sm'>

                <table className="table data-table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Status</th>
                            <th scope="col">Publish Date</th>
                            <th scope="col">Approved/Completed Date</th>
                            <th scope="col">Points</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            props.data === "all" ?
                                studentReqReducer.studentActivityRequest.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.heading?.categoryName}</td>
                                            <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                            <td>{data.publishDate.split('T')[0]}</td>
                                            {
                                                data.status === 'Approved' ?
                                                    <td>
                                                        {data.approvedDate.split('T')[0]}
                                                    </td>
                                                    : data.status === 'Completed'
                                                        ? <td>
                                                            {data.completedDate.split('T')[0]}
                                                        </td>
                                                        : <td>
                                                            -
                                                        </td>
                                            }
                                            {
                                                data.status === 'Completed' ?
                                                    <td>
                                                        10
                                                    </td>
                                                    : <td>
                                                        0
                                                    </td>
                                            }
                                            <td>
                                                {
                                                    data.status === 'Pending' || data.status === 'Revised' ?
                                                        <Link to={`/student/view/${data._id}`} >
                                                            <span className='mr-5'>view/edit</span>
                                                        </Link>
                                                        : <Link to={`/student/view/${data._id}`} >
                                                            <span className='mr-5'>view</span>
                                                        </Link>
                                                }

                                            </td>
                                            <td>
                                                {
                                                    data.status === 'Pending' ?
                                                        <i className='bx bxs-trash text-dark' onClick={() => delete_req(data._id)}></i>
                                                        : <></>
                                                }

                                            </td>
                                            {/* <td>
                                                    <div className='btn-group'>
                                                        <span className='mr-4'><i className='bx bxs-edit-alt'></i></span>
                                                    </div>
                                                </td> */}
                                        </tr>
                                    )
                                })
                                : props.data === "pending" ?

                                    studentReqReducer.studentActivityRequest.map((data, index) => {
                                        if (data.status === 'Pending') {
                                            i++
                                            return (
                                                <tr key={index}>
                                                    <th scope="row" >{i}</th>
                                                    <td>{data.heading?.categoryName}</td>
                                                    <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                    <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                    <td>-</td>
                                                    <td>0</td>
                                                    <td>
                                                        <Link to={`/student/view/${data._id}`} >
                                                            <span className='mr-5'>view/edit</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {
                                                            data.status === 'Pending' ?
                                                                <i className='bx bxs-trash text-dark' onClick={() => delete_req(data._id)}></i>
                                                                : <></>
                                                        }
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    })
                                    : props.data === "revised" ?
                                        studentReqReducer.studentActivityRequest.map((data, index) => {
                                            if (data.status === 'Revised') {
                                                i++
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row" >{i}</th>
                                                        <td>{data.heading?.categoryName}</td>
                                                        <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                        <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                        <td>-</td>
                                                        <td>0</td>
                                                        <td>
                                                            <Link to={`/student/view/${data._id}`} >
                                                                <span className='mr-5'>view/edit</span>
                                                            </Link>
                                                        </td>
                                                        <td></td>
                                                    </tr>

                                                )
                                            }
                                        }) : props.data === "approved" ?
                                            studentReqReducer.studentActivityRequest.map((data, index) => {
                                                if (data.status === 'Approved') {
                                                    i++
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row" >{i}</th>
                                                            <td>{data.heading?.categoryName}</td>
                                                            <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                            <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                            <td>{data.approvedDate.split('T')[0]}</td>
                                                            <td>0</td>
                                                            <td>
                                                                <Link to={`/student/view/${data._id}`} >
                                                                    <span className='mr-5'>view</span>
                                                                </Link>
                                                            </td>
                                                            <td></td>
                                                        </tr>

                                                    )
                                                }
                                            }) : props.data === "completed" ?
                                                studentReqReducer.studentActivityRequest.map((data, index) => {
                                                    if (data.status === 'Completed') {
                                                        i++
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row" >{i}</th>
                                                                <td>{data.heading?.categoryName}</td>
                                                                <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                                <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                                <td>{data.approvedDate.split('T')[0]}</td>
                                                                <td>10</td>
                                                                <td>
                                                                    <Link to={`/student/view/${data._id}`} >
                                                                        <span className='mr-5'>view</span>
                                                                    </Link>
                                                                </td>
                                                                <td></td>
                                                            </tr>

                                                        )
                                                    }
                                                }) : props.data === "rejected" ?
                                                    studentReqReducer.studentActivityRequest.map((data, index) => {
                                                        if (data.status === 'Rejected') {
                                                            i++
                                                            return (
                                                                <tr key={index}>
                                                                    <th scope="row" >{i}</th>
                                                                    <td>{data.heading?.categoryName}</td>
                                                                    <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                                    <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                                    <td>23-07-2022</td>
                                                                    <td>10</td>
                                                                    <td>
                                                                        <Link to={`/student/view/${data._id}`} >
                                                                            <span className='mr-5'>view</span>
                                                                        </Link>
                                                                    </td>
                                                                    <td></td>
                                                                </tr>

                                                            )
                                                        }
                                                    }) : ""
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
    // } else {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

}
export default Table
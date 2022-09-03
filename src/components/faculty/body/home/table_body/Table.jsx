import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { useForm } from "react-hook-form";
import ExportModel from '../model/ExportModel';

const Table = (props) => {

    // console.log(props)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const facultyReqReducer = useSelector(state => state.facultyReducer)
    // const [selectedRowsData, setSelectedRowsData] = useState()
    // const handleChanges = ({ selectedRows }) => {
    //     // You can set state or dispatch with something like Redux so we can use the retrieved data
    //     // console.log('Selected Rows: ', selectedRows);
    //     setSelectedRowsData(selectedRows)
    // };
    const columns = [
        {
            name: 'En. Number',
            selector: row => row.student.enrollmentNo,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.student.name,
        },
        {
            name: 'Title',
            selector: row => row.heading.categoryName,
        },
        {
            name: 'Status',
            selector: row => <div className={`status_${row.status}`}>{row.status}</div>,
        },
        {
            name: 'Publish Date',
            selector: row => <div>{row.publishDate.split('T')[0]}</div>,
        },
        {
            name: '',
            selector: row => <Link to={`/faculty/view/${row._id}`} >
                <span className='mr-5'>view</span>
            </Link>,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'hidden',
                textAlign: 'center',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    let data_arr = []
    let data
    if (props.data.data_tabs === 'all') {
        data_arr = []
        if (props.data.data) {
            // For only Status and Enrollment
            if (props.data.data.selectStatus !== '' && props.data.data.selectEnNumber !== '') {
                facultyReqReducer.faciltyActivityReqByClass.map((data) => {
                    if (data.status === props.data.data.selectStatus && data.student.enrollmentNo === props.data.data.selectEnNumber) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }

            // For Only Enrollment Number
            else if (props.data.data.selectEnNumber !== '') {
                facultyReqReducer.faciltyActivityReqByClass.map((data) => {
                    if (data.student.enrollmentNo === props.data.data.selectEnNumber) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }

            // For Only Status
            else if (props.data.data.selectStatus !== '') {
                facultyReqReducer.faciltyActivityReqByClass.map((data) => {
                    if (data.status === props.data.data.selectStatus) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }
        } else {
            data = facultyReqReducer.faciltyActivityReqByClass
        }
    }
    else if (props.data === 'pending') {
        data_arr = []
        facultyReqReducer.faciltyActivityReqByClass.map((data) => {
            if (data.status === 'Pending') {
                data_arr.push(data)
            }
        })
        data = data_arr
    }
    else if (props.data === 'revised') {
        data_arr = []
        facultyReqReducer.faciltyActivityReqByClass.map((data) => {
            if (data.status === 'Revised') {
                data_arr.push(data)
            }
        })
        data = data_arr
    }
    else if (props.data === 'approved') {
        data_arr = []
        facultyReqReducer.faciltyActivityReqByClass.map((data) => {
            if (data.status === 'Approved') {
                data_arr.push(data)
            }
        })
        data = data_arr
    }
    else if (props.data === 'completed') {
        data_arr = []
        facultyReqReducer.faciltyActivityReqByClass.map((data) => {
            if (data.status === 'Completed') {
                data_arr.push(data)
            }
        })
        data = data_arr
    }
    else if (props.data === 'rejected') {
        data_arr = []
        facultyReqReducer.faciltyActivityReqByClass.map((data) => {
            if (data.status === 'Rejected') {
                data_arr.push(data)
            }
        })
        data = data_arr
    }
    // console.log(data)

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.student.name}</div><br />
        <div><strong>Title</strong> :  {data.heading.categoryName}</div>
        <div><strong>Class</strong> :  {data.class.name}</div>
        <div><strong>Publish Date</strong> :  {data.publishDate.split('T')[0]}</div>
    </div>;




    // const onSubmit = (data) => {
    //     console.log(data)
    //     if (!selectedRowsData.length == 0) {
    //         // console.log(selectedRows)
    //         console.log(selectedRowsData)
    //     } else {
    //         console.log("Select row")
    //     }
    // }

    const handleSort = (column, direction) => (column.selector, direction);
    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-end mb-3 mt-3'>
                        <div className='mr-2'>
                            <select className="form-control form-control-sm "
                                style={{ cursor: 'pointer' }}
                                name="selectStatus"
                                {...register("selectStatus", {
                                    required: true
                                })}
                            >
                                <option defaultValue value="">Select Status</option>
                                <option value="12">Approved</option>
                                <option value="21">Revise</option>
                                <option value="33">Rejected</option>
                            </select>
                            <span className="text-danger">{errors.selectStatus?.type === 'required' && "Status is required!"}</span>
                        </div>
                        <button className='btn btn-sm mb-2' type='submit'>Submit</button>
                    </div>
                </form> */}

            <div className='row  nav-item '>
                <button type="button" className="btn btn-sm add_export_btn pl-2 pr-3 mr-2 ml-auto" data-toggle="modal" data-target="#exportModelFaculty">
                    <span><i className='bx bx-export'></i> Export Report</span>
                </button>
                <ExportModel data={data} />
            </div>

            <div className='mt-5 ml-3'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    onSort={handleSort}
                    // selectableRows
                    // onSelectedRowsChange={handleChanges}
                    customStyles={customStyles}
                    expandableRows expandableRowsComponent={ExpandedComponent}
                />
            </div>


        </>
    )
}

export default Table
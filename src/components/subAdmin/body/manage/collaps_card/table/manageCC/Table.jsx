import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_DELETE_CC_PROGRESS, REQ_FOR_UNASSIGN_CLASS_PROGRESS } from '../../../../../../../redux/subAdmin/action/action'
import EditCCModel from '../../manage_cc/editCC/EditCCModel'

import DataTable from 'react-data-table-component'
import { useForm } from "react-hook-form";
const Table = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const [classEdit, setClassEdit] = useState("") // for props data to EditModel
    // Delete Class
    const deleteClass = (userdata) => {

        const data = {
            'username': userdata.username,
            'school': userdata.school._id
        }

        dispatch({ type: REQ_FOR_DELETE_CC_PROGRESS, payload: data })
    }
    // UnAssignClass
    const unassignClass = (userdata) => {
        // console.log(userdata)
        const data = {
            'facultyID': userdata._id,
        }

        dispatch({ type: REQ_FOR_UNASSIGN_CLASS_PROGRESS, payload: data })
    }


    // For data table
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
        {
            name: 'Assign Class',
            selector: row => row.class[0]?.batchName
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.name}`} onClick={() => setClassEdit(row)}></i></span>
                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteClass(row)}></i></span>
                {
                    row.class.length === 0 ? <></> : <span><i className='bx bxs-no-entry text-danger ml-3' onClick={() => unassignClass(row)}></i></span>
                }
            </div>,
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

    // let sort = { data: "all" }
    const [filter, setFilter] = useState('')
    const onSubmit = (data) => {
        // console.log(data)
        if (data.selectCC === '' && data.selectAssignClass === '') {
            // TDOD
            // Err handle
            console.log("Any one Requied")
        } else {
            setFilter({ data })
        }
    }
    const resetSort = () => {
        setFilter('')
        // This is used for forcefully chnage value
        setValue('selectCC', '')
        setValue('selectAssignClass', '')

        document.getElementById("filter_form_apc_cc").reset()
    }


    // GET DATA For Filter
    let data, data_arr = []
    // GET data CC and assign class for filter
    let cc_data = []
    let assign_class_data = []

    // GET data for filter

    // For getting all CC Name for filtering
    apcReducer.apcCC.map((data) => {
        if (!cc_data.includes(data.name)) {
            cc_data.push(data.name)
        }
    })
    // For getting all BAtch Name for filtering
    apcReducer.apcCC.map((data) => {
        if (!assign_class_data.includes(data.class[0]?.batchName)) {
            if (data.class[0]?.batchName) {
                assign_class_data.push(data.class[0]?.batchName)
            }
        }
    })

    // SET data for filter
    if (filter) {
        if (filter.data?.selectCC !== '' || filter.data?.selectAssignClass !== '') {
            // IF Both are not Empty
            // SET Data mathc with Assign class and CC name
            if (filter.data.selectAssignClass !== '' && filter.data.selectCC !== '') {
                data_arr = []
                apcReducer.apcCC.map((data) => {
                    if (data.name === filter.data.selectCC) {
                        if (data.class[0]?.batchName === filter.data.selectAssignClass) {
                            data_arr.push(data)
                        }
                    }
                })
                data = data_arr
            }
            // SET data match with Select CC name
            else if (filter.data.selectCC !== '') {
                data_arr = []
                apcReducer.apcCC.map((data) => {
                    if (data.name === filter.data.selectCC) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }
            // SET data match with Select Assign Class name
            else if (filter.data.selectAssignClass !== '') {
                data_arr = []
                apcReducer.apcCC.map((data) => {
                    if (data.class[0]?.batchName === filter.data.selectAssignClass) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }

        }
    } else {
        data = apcReducer.apcCC
    }

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.name}</div><br />
        <div><strong>Username</strong> :  {data.username}</div>
        <div><strong>Class</strong> :  {data.class[0]?.name}</div>
        <div><strong>Batch</strong> :  {data.class[0]?.betch}</div>

    </div>;

    return (

        <>
            <form className='row mt-5 ml-3' id='filter_form_apc_cc' onSubmit={handleSubmit(onSubmit)}>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        {...register("selectCC")}
                    // onChange={e => setSelectSelectCC(e.target.value)}
                    >
                        <option defaultValue value="">CC Name</option>
                        {
                            cc_data.map((data, index) => {
                                return (
                                    <option value={data} key={index}>{data}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        {...register("selectAssignClass")}
                    // onChange={e => setSelectAssignClass(e.target.value)}
                    >
                        <option defaultValue value="">Assign Class</option>
                        {
                            assign_class_data.map((data, index) => {
                                return (
                                    <option value={data} key={index}>{data}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='mt-2 mr-4'>
                    <button className='btn btn-sm filter_apply_btn' type='submit'>Apply</button>
                    <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
                </div>
            </form>

            <div className='mt-5 ml-3'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={customStyles}
                    expandableRows expandableRowsComponent={ExpandedComponent}
                />
            </div>

            <EditCCModel data={classEdit} />
        </>

    )
}

export default Table
import React, { useState } from 'react'
import Table from './table_body/Table'
import Model from './model/Model';
import { useSelector } from 'react-redux'

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import HeaderPDFFormate from '../../../assets/img/PDF/pdfFormat.png'
import FooterPDFFormate from '../../../assets/img/PDF/SignLine.png'


const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);
    const studentReducer = useSelector(state => state.studentReducer)

    const toggleTab = (index) => {
        setToggleState(index);
    };



    const exportpdf = () => {

        let doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: [595, 842]
        })

        let report_data = []

        studentReducer.studentActivityRequest?.map((data, ind) => {
            if (data.status === "Completed")
                report_data.push([ind + 1, data.heading.categoryName, 10, data.class.name, data.status, data.publishDate.split('T')[0], data.completedDate.split('T')[0]])
        })

        const imageHeight = 110
        doc.setFontSize(11);

        // --------------HEader--------------
        var header = function () {
            doc.addImage(HeaderPDFFormate, "PNG", 40, 10, 520, imageHeight)
            doc.text(`Name: ${studentReducer.studentProfile.name}`, 40, imageHeight + 40)
            doc.text(`Enrollment No: ${studentReducer.studentProfile.enrollmentNo}`, 40, imageHeight + 60)
            doc.text(`School: ${studentReducer.studentProfile.school.name}`, 40, imageHeight + 80)
            doc.text('Page ' + (doc.internal.pages.length - 1), 520, imageHeight + 710);
        };

        autoTable(doc, {
            didDrawPage: header,
            margin:
            {
                top: imageHeight + 110
            },
            showHead: 'everyPage',
            head: [['index', 'Activity', 'Point', 'Class', 'Status', 'Publish Date', 'Completed Date']],
            body: report_data
        })

        // ------------ Footer --------

        doc.addImage(FooterPDFFormate, "PNG", 40, doc.lastAutoTable.finalY + 100, 520, 0.5)
        // For sign of APC
        doc.text('APC,', 40, doc.lastAutoTable.finalY + 120);
        doc.text(`SCHOOL OF ${studentReducer.studentProfile.school.name}`, 40, doc.lastAutoTable.finalY + 138);
        // For sign of Dean
        doc.text('Dean,', 241, doc.lastAutoTable.finalY + 120);
        doc.text(`SCHOOL OF ${studentReducer.studentProfile.school.name}`, 241, doc.lastAutoTable.finalY + 138);
        // For sign of COE
        doc.text('COE,', 442, doc.lastAutoTable.finalY + 120);
        doc.text(`P P SAVANI UNIVERSITY`, 442, doc.lastAutoTable.finalY + 138);

        // Name of PDF
        doc.save(`report_SO${studentReducer.studentProfile.school.name.charAt(0)}.pdf`)
    }



    const TabsStatus = ['All', 'Pending', 'Revised', 'Approved', 'Completed', 'Rejected']

    return (
        <>
            <div className="block_tabs">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <div className='row'>
                        {
                            TabsStatus.map((data, index) => {
                                return (
                                    <div className='nav-item' key={index + 1}>
                                        <div
                                            className={toggleState === index + 1 ? "tabs active-tabs nav-link" : "tabs nav-link"}
                                            onClick={() => toggleTab(index + 1)}
                                        >
                                            {data}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            studentReducer.studentProfile?.totalPoint !== 100
                                ? <div className='mb-3 ml-auto nav-item '>
                                    <button type="button" className="btn btn-sm pl-3 pr-3 mr-3 add_btn_req" data-toggle="modal" data-target="#addActivityModal">
                                        Add
                                    </button>
                                    <Model />
                                </div>
                                : <div className='mb-3 ml-auto nav-item '>
                                    <button type="button" className="btn btn-sm add_export_btn pl-2 pr-2 mr-2 " onClick={exportpdf}>
                                        <span><i className='bx bx-export'></i> Export Report</span>
                                    </button>
                                </div>
                        }


                    </div>
                </div>
            </div>
            <div className="content-tabs mt-4">

                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <Table data={"all"} />
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Table data={"pending"} />
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >

                    <Table data={"revised"} />

                </div>

                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >

                    <Table data={"approved"} />

                </div>

                <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >

                    <Table data={"completed"} />

                </div>

                <div
                    className={toggleState === 6 ? "content  active-content" : "content"}
                >

                    <Table data={"rejected"} />

                </div>
            </div>
        </>
    )
}
export default Tabs

import React from 'react';
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import HeaderPDFFormate from '../../../../assets/img/PDF/pdfFormat.png'
import FooterPDFFormate from '../../../../assets/img/PDF/SignLine.png'

const Export = (props) => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    const exportpdf = () => {

        let doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: [595, 842]
        })

        let report_data = []

        props.data[0].map((data, ind) => {
            report_data.push([ind + 1, data.student.enrollmentNo, data.student.name, data.student.totalPoint, data.class.name, data.class.betch, data.publishDate.split('T')[0], data.status])
        })


        const imageHeight = 110
        doc.setFontSize(11);

        // --------------HEader--------------
        var header = function () {
            doc.addImage(HeaderPDFFormate, "PNG", 40, 10, 520, imageHeight)
            doc.text(`School: ${instAdminReducer.adminProfile.school.name}`, 40, imageHeight + 40)
            doc.text(`Generated by: ${instAdminReducer.adminProfile.name}`, 40, imageHeight + 60)
            doc.text(`Format: ${props.data[1]}`, 40, imageHeight + 80);
            doc.text('Page ' + (doc.internal.pages.length - 1), 520, imageHeight + 710);
        };

        autoTable(doc, {
            didDrawPage: header,
            margin:
            {
                top: imageHeight + 110
            },
            showHead: 'everyPage',
            head: [['index', 'Enrollment No', 'Name', 'TotalPoint', 'Class', 'Year', 'Publish Date', 'Status']],
            body: report_data
        })

        // ------------ Footer --------

        // doc.addImage(FooterPDFFormate, "PNG", 40, doc.lastAutoTable.finalY + 100, 520, 0.5)
        // // For sign of APC
        // doc.text('APC,', 40, doc.lastAutoTable.finalY + 120);
        // doc.text(`SCHOOL OF ${apcReducer.apcProfile.school.name}`, 40, doc.lastAutoTable.finalY + 138);
        // // For sign of Dean
        // doc.text('Dean,', 241, doc.lastAutoTable.finalY + 120);
        // doc.text(`SCHOOL OF ${apcReducer.apcProfile.school.name}`, 241, doc.lastAutoTable.finalY + 138);
        // // For sign of COE
        // doc.text('COE,', 442, doc.lastAutoTable.finalY + 120);
        // doc.text(`P P SAVANI UNIVERSITY`, 442, doc.lastAutoTable.finalY + 138);

        // Name of PDF
        doc.save(`report_SO${instAdminReducer.adminProfile.school.name.charAt(0)}.pdf`)
    }



    // Export CSV
    const exportCsv = () => {
        let csvRow = []
        let a = [['', 'Enrollment No', 'Name', 'TotalPoint', 'Class', 'Year', 'Publish Date', 'Status']]

        props.data[0].map((data, ind) => {
            a.push([data.student.enrollmentNo, data.student.name, data.student.totalPoint, data.class.name, data.class.betch, data.school.name, data.status])
        })

        a.map((data, ind) => {
            csvRow.push(data.join(","))
        })

        let csvString = csvRow.join("%0A")

        let anchor = document.createElement("a")
        anchor.href = 'data:attachment/csv' + csvString
        // anchor.target = "_Blank";
        anchor.download = `report_SO${instAdminReducer.adminProfile.school.name.charAt(0)}.csv`
        document.body.appendChild(anchor)
        anchor.click()
    }



    // Using UseForm to get All feild data (not file upload)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.select === "CSV") {
            exportCsv()
        }
        else if (data.select === "PDF") {
            exportpdf()
        }
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                {/* <strong>Instruction</strong> */}
                <li>All feild are Required!</li>
                <li>Export of Filter1</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >

                <div className='mb-4 mt-2 '>

                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="select"
                        {...register("select", {
                            required: true
                        })}

                    >
                        <option defaultValue value="">Select Type</option>
                        <option value="CSV">CSV</option>
                        <option value="PDF">PDF</option>
                    </select>
                    <span className="text-danger">{errors.select?.type === 'required' && "Selection is required!"}</span>
                </div>



                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    <button type="sumit" className="btn submit-btn">Export</button>
                </div>

            </form>
        </>
    )

}

export default Export
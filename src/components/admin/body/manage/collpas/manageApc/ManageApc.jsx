import ManageApcTable from "./table/ManageApcTable"

const ManageApc = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Coordinators (APC)</h5>
                <ManageApcTable />
            </div>
        </>
    )
}
export default ManageApc
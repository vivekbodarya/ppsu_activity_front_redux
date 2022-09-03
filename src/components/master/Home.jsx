import Card from "./body/home/card/Card"
import Chart from "./body/home/chart/Chart"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
const Home = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    return (
        <>
            <div className="container main_container mt-5">
                {
                    coeReducer.coe_profile_dataIsLoaded === true && coeReducer.getSchool_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <h3 className="mb-4">Home</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-7">
                                    <Card />
                                </div>
                                {/* <div className="col-sm-12 col-md-6 col-lg-5">
                                    <Chart />
                                </div> */}
                            </div>
                        </>
                        : Loader()
                }
            </div>
        </>
    )
}

export default Home
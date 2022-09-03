import { useSelector } from 'react-redux'
const TotalPoints = () => {
    const studentReducer = useSelector(state => state.studentReducer)
    return (
        <>
            <div className="card text-center p-2 student_total_point_card">
                <div className='card-body'>
                    <div className='font'>Total Points</div>
                    <div><span className='point'>{studentReducer.studentProfile.totalPoint}</span><span className='tpoint'>/100</span></div>
                </div>
            </div>
        </>
    )

}
export default TotalPoints
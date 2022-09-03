import './App.css'
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';


// Student
import Home from './components/student/Home';
import StudentNavbar from './components/student/studentNavbar/StudentNavbar';
import Profile from './components/student/Profile';
import View from './components/student/View';

// Faculty
import FacultyNavbar from './components/faculty/facultyNavbar/FacultyNavbar';
import FHome from './components/faculty/Home';
import FProfile from './components/faculty/Profile'
import FView from './components/faculty/View'

// SubAdmin
import SubAdminNavbar from './components/subAdmin/subAdminNavbar/SubAdminNavbar';
import ApcActivity from './components/subAdmin/Activity'
import ApcHistory from './components/subAdmin/History';
import ApcManage from './components/subAdmin/Manage';
import AView from './components/subAdmin/View'
import AProfile from './components/subAdmin/Profile'
import AHelp from './components/subAdmin/Help'

// Admin (instAdmin)
import InstNavabar from './components/admin/adminNavbar/AdminNavbar'
import InstHome from './components/admin/Home'
import InstActivity from './components/admin/Activity'
import InstManage from './components/admin/Manage'
import InstProfile from './components/admin/Profile'
import InstView from './components/admin/View'

// Materadmin (COE)
import MasterNavbar from './components/master/masterNavbar/MasterNavbar';
import CoeHome from './components/master/Home'
import Schools from './components/master/Schools';
import COEManage from './components/master/Manage';
import COEProfile from './components/master/Profile'

// Student Login
import Login from './components/student/Login';
// faculty Login
import FacultyLogin from './components/faculty/FacultyLogin';
// Apc Login
import SubAdminLogin from './components/subAdmin/SubAdminLogin';
// Admin
import AdminLogin from './components/admin/AdminLogin';
// COE Login
import CoeLogin from './components/master/CoeLogin';

// Used for Validation and Toast msg show to user
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// PageNotFound
import PageNotFound from './components/PageNotFound';
import Cookies from 'js-cookie';
import { useState } from 'react';

function App() {


  axios.defaults.withCredentials = true;
  axios.defaults.corssDomain = true;

  // const [userOnline, setuserOnline] = useState(1)
  // console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
  // window.addEventListener('online', () => setuserOnline(1));
  // window.addEventListener('offline', () => setuserOnline(0));
  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault()
  //   Cookies.remove('role')
  //   Cookies.remove('isAuth')
  //   Cookies.remove('connect.sid')
  // })

  // if (userOnline === 1) {

  if (!Cookies.get('role') || !Cookies.get('isAuth')) {
    return (
      <>
        {/* <Router> */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/faculty" exact element={<FacultyLogin />} />
          <Route path="/apc" exact element={<SubAdminLogin />} />
          <Route path="/instadmin" exact element={<AdminLogin />} />
          <Route path="/coe" exact element={<CoeLogin />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
  }
  else if (Cookies.get('role') === "student" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <StudentNavbar />
        <Routes>
          {/* <Route path="/" exact element={<Login />} /> */}
          {/* Student Dashboard Home page*/}
          <Route path='/student/' exact element={<Home />} />
          {/* Student Profile Page */}
          <Route path='/student/profile' exact element={<Profile />} />
          <Route path='/student/view/:id' exact element={<View />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    );
  }
  else if (Cookies.get('role') === "faculty" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <FacultyNavbar />
        <Routes>
          {/* faculty Dashboard */}
          <Route path='/faculty/' exact element={<FHome />} />
          <Route path='/faculty/profile' exact element={<FProfile />} />
          <Route path='/faculty/view/:id' exact element={<FView />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    );
  }
  else if (Cookies.get('role') === "apc" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <SubAdminNavbar />
        <Routes>
          {/* sub Admin Dashboard */}
          <Route path='/apc/' exact element={<ApcHistory />} />
          <Route path='/apc/activity' exact element={<ApcActivity />} />
          <Route path='/apc/history' exact element={<ApcHistory />} />
          <Route path='/apc/manage' exact element={<ApcManage />} />
          <Route path='/apc/view/:id' exact element={<AView />} />
          <Route path='/apc/profile' exact element={<AProfile />} />
          <Route path='/apc/help' exact element={<AHelp />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />


      </>
    )
  }
  else if (Cookies.get('role') === "admin" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <InstNavabar />
        <Routes>
          {/* InstAdmin (Admin) Dashboard */}
          <Route path='/instadmin/' exact element={<InstHome />} />
          <Route path='/instadmin/activity' exact element={<InstActivity />} />
          <Route path='/instadmin/manage' exact element={<InstManage />} />
          <Route path='/instadmin/profile' exact element={<InstProfile />} />
          <Route path='/instadmin/view/:id' exact element={<InstView />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}


        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    )
  }
  else if (Cookies.get('role') === "coe" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <MasterNavbar />
        <Routes>
          {/* InstAdmin (Admin) Dashboard */}
          <Route path='/coe/' exact element={<CoeHome />} />
          <Route path='/coe/schools' exact element={<Schools />} />
          <Route path='/coe/manage' exact element={<COEManage />} />
          <Route path='*' exact element={<PageNotFound />} />
          <Route path='/coe/profile' exact element={<COEProfile />} />

        </Routes>
        {/* </Router> */}


        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    )
  }
  else {
    return (
      <>
        {/* <Router> */}
        <Routes>
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}
      </>
    )
  }

  // }
  // // If not Online
  // else {
  //   return (
  //     <>
  //       <div className='noInternet'>
  //         no Internet
  //       </div>
  //     </>
  //   )
  // }

}

export default App;

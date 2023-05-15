import './App.css';
// import { UserContext } from './components/Job Seeker/UserContext';

import React from "react";
import Home from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';

import {Route, Routes} from 'react-router-dom';
import {useState, createContext, useReducer} from "react";
// import {Route, Routes} from 'react-router-dom@6.0.0-alpha.2'
import LoginEmployee from './components/Registration/LoginEmployee';
import LoginEmployer from './components/Registration/LoginEmployer';
import RegisterEmployee from './components/Registration/RegisterEmployee';
import RegisterEmployers from './components/Registration/RegisterEmployers';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';
import Resume from './components/resume/resume';
import ResumeDisplay from './components/resume/resumedisplay';
import Navbar from './components/navbars/employee_navbar';
import HomeNavbar from './components/navbars/home_navbar';
import EmployerNavbar from './components/navbars/employer_navbar';
import ApplyJob from './components/Job Seeker/ApplyForJobs';
import PostJob from './components/Employers/PostJob';
import EmployeeProfile from './components/Job Seeker/employeeprofile';
import EmployerProfile from './components/Employers/employerprofile';
import EmployeeSearch from './components/Employers/employeesearch';
import SearchJobSeekers from './components/Job Seeker/SearchPageJobSeekers';
import {initialState, reducer} from './reducer/UseReducer';
import Logout from './components/Registration/Logout';
import Admin from './components/Admin/Admin';
import Jobseekers from './components/Admin/Jobseekers';
import Recruiter from './components/Admin/Recruiter';
import JobsData from './components/Admin/JobsData';
import LoginAdmin from './components/Registration/LoginAdmin';
import AllJobs from './components/homepages/AllJobs';

export const UserContext = createContext();

function App() {
  
  const [userEmail, setUserEmail] = useState("");
  const userContextValue = {userEmail, setUserEmail}; // Added new line
  const [state, dispatch] = useReducer(reducer, initialState);

  return (

      <>
        <UserContext.Provider value = {{state, dispatch}}>
        
        <Routes>
          <Route path="/" element = {<><HomeNavbar/> <Home /></>} />

          <Route path="/employer" index element = {<><EmployerNavbar/><HomePageEmployers /> </>} />
            
          <Route path="/signupemployee" index element = {<><HomeNavbar/> <RegisterEmployee /></>} />
            
          <Route path="/signupemployer" index element = {<><HomeNavbar/> <RegisterEmployers /></>} />
            
          <Route path="/loginemployee" index element = {<><HomeNavbar/> <LoginEmployee /></>} />
            
          <Route path="/loginemployer" index element = {<><HomeNavbar/> <LoginEmployer /></>} />
          
          <Route path="/jobseeker" index element = {<> <Navbar/><HomePageJobSeeker /></>} />
            
          <Route path="/resume" index element = {<> <Navbar/><Resume /></>} />
            
          <Route path="/resumedisplay" index element = {<ResumeDisplay/>} />
            
          <Route path="/searchJobSeeker" index element = {<><Navbar/><SearchJobSeekers /></>} />

          <Route path="/applyjob" index element = {<ApplyJob />} />

          <Route path="/postjob" index element = {<><EmployerNavbar/><PostJob /></>} />

          <Route path="/employeeprofile" index element = {<><Navbar/><EmployeeProfile /></>} />

          <Route path="/employerprofile" index element = {<><EmployerNavbar/><EmployerProfile /></>} />

          <Route path="/employeesearch" index element = {<><EmployerNavbar/><EmployeeSearch /></>} />

          <Route path="/logout" index element = {<><HomeNavbar/><Logout/></>} />

          <Route path="/admin" index element = {<><Navbar/><Admin /></>} />

          <Route path="/jobseekers" index element = {<><Navbar/><Jobseekers /></>} />

          <Route path="/recruiter" index element = {<><Navbar/><Recruiter /></>} />

          <Route path="/jobsdata" index element = {<><Navbar/><JobsData /></>} />

          <Route path="/loginadmin" index element = {<><Navbar/><LoginAdmin /></>} />

          <Route path="/alljobs" index element = {<><Navbar/><AllJobs /></>} />
            
        </Routes>
        </UserContext.Provider>
      </>

  );
  

}

export default App;
import React from 'react'
import logo from './logo.png';
import homeimg1 from './homeimg1.jpg';
import axios from 'axios';
import styles from './home1.module.css';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './loginbutton';
// import LogoutButton from './logoutbutton';
import SignUpButton from './signupbutton';
import { Login } from '../Registration/LoginEmployee';
import './home1.module.css'


const Home = (props) => {
  
  
  
  const navigate = useNavigate();
  
  const handleSwitch_login_jobseeker = () =>{
    navigate("/loginemployee")
  }

  const handleSwitch_login_employer = () =>{
    navigate("/loginemployer")
  }

  const handleSwitch_signup_employee = () =>{
    navigate("/signupemployee")
  }
  
  const handleSwitch_signup_employer = () =>{
    navigate("signupemployer")

  }

  return (
    <div>
      <div className={styles['border']}>
        <span className={styles['text']}>
          <span>Job for everyone</span>
        </span>
        
        <span className={styles['text04']}>
          <span>Job Portal</span>
        </span>

        <div>
          
          <span>
              <p style={{color:'grey', marginTop:'250px', marginLeft:'75px', fontSize:'30px', fontFamily:'Verdana'}}>Sign up as a Job seeker:</p>
              <button type="button" style={{marginLeft:'75px'}} onClick={handleSwitch_signup_employee}>Sign Up</button> 
              <p style={{color:'grey', marginLeft:'75px', fontSize:'30px', fontFamily:'Verdana'}}>Sign up as an Employer:</p>
              <button type="button" style={{marginLeft:'75px'}} className='button-1' onClick={handleSwitch_signup_employer}>Sign Up</button>
          </span>
          <span>
              <p style={{color:'grey', marginTop:'70px', marginLeft:'75px', fontSize:'30px', fontFamily:'Verdana'}}>Sign in as a Job seeker:</p>
              <button type="button" style={{marginLeft:'75px'}} onClick={handleSwitch_login_jobseeker}>Sign In</button> 
              <p style={{color:'grey', marginLeft:'75px', fontSize:'30px', fontFamily:'Verdana'}}>Sign in as an Employer:</p>
              <button type="button" style={{marginLeft:'75px'}} onClick={handleSwitch_login_employer}>Sign In</button>
          </span>


        </div>

        <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>

      </div>
      
    </div>

  )
}

export default Home

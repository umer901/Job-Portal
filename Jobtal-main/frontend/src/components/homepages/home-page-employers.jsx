import React from 'react'
import logo from './logo.png';
import styles from './home-page-employers.module.css'
import homeimg2 from './homeimg2.jpg';
// import LogoutButton from './logoutbutton';
import LoginButton from './loginbutton';
import { useNavigate } from 'react-router-dom';


const HomePageEmployers = (props) => {

  const navigate = useNavigate()

  const handlePostJob = () => {
    navigate('/postjob')
  }

  const employeesearch = () => {
    navigate('/employeesearch')
  }

  return (
    <div>

      <div className={styles['home-page-employers']}>
        <div className={styles['search']}>
        
          <div className={styles['group1']}>
            <span className={styles['text02']}>
              {/* <input type="text" placeholder="Profession, position or location" className={styles["textbar"]} /> */}
              <button type="button" className={styles["button-1"]} onClick={employeesearch}>Search Employees</button> 
            </span>
          </div>
        </div>
        <span className={styles['text04']}>
          <span onClick={employeesearch}>Find a Jobseeker</span>
        </span>

        <span className={styles['text06']}>
          <span>Jobtal</span>
        </span>

        <span className={styles['text16']}>
          <span>Jobs for everyone</span>
        </span>
        <div className={styles['sign-in']}>
          <button type="button" className={styles["button-1"]} onClick={handlePostJob}>Post a New Job</button> 


        </div>
      </div>
  
        <img alt="not loading" src = {homeimg2} className = {styles['img1']}/>
        
    </div>
  )
}

export default HomePageEmployers

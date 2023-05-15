import React from 'react'
import './logo.png'
import styles from './resume.css';
// import styles from './sign-up-page.module';
import { Link ,useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {useNavigate, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import ResumeDisplay from './resumedisplay';




const Resume = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [skill, setSkill] = useState('');
  const [phone, setPhone] = useState('');
  const [major, setMajor] = useState('');


  const [showChild, setShowChild] = useState(false);


  
  const navigate = useNavigate();



//   const handleSwitch = () =>{
//     navigate("/resumedisplay",object)
//   }


  return (
    <section>

        <body>
            <div className={styles['testbox']}>
            <form action="/">
                <h1>Resume Builder</h1>
                <div className={styles['item']}>
                <p>Your name</p>
                <div>
                    <input type="text" name="name" placeholder="First" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                    <input type="text" name="name" placeholder="Last" value={lastname} onChange={e => setLastname(e.target.value)}/>
                </div>
                </div>
                <div className={styles['item']}>
                <p>Your email</p>
                <input type="text" name="name" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className={styles['item']}>
                <p>Phone #</p>
                <input type="text" name="name" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <div className={styles['item']}>
                <p>What is the salary range you expect to be paid within?</p>
                <input type="text" name="name" value={salary} onChange={e => setSalary(e.target.value)}/>
                </div>
                

                <div className={styles['item']}>
                <p>House Address</p>
                <input type="text" name="name" value={location} onChange={e => setLocation(e.target.value)}/>
                </div>
                
                <div className={styles['item']}>
                <p>What job position are you looking for?</p>
                <select>
                    <option value="">*Please select*</option>
                    <option value="A">Intern Position</option>
                    <option value="B">Junior Position</option>
                    <option value="C">Intermediate Position</option>
                    <option value="D">Senior Position</option>
                    <option value="E">Head Position</option>
                </select>
                </div>
                <div className={styles['item']}>
                <p>What was your university major?</p>
                <input type="text" name="name" value={major} onChange={e => setMajor(e.target.value)}/>
                </div>
                <div className={styles['item']}>
                <p>Write a few sentences about your work experience</p>
                <textarea rows="5" value={experience} onChange={e => setExperience(e.target.value)}/>
                </div>
                <div className={styles['item']}>
                <p>Write about your most important skills.</p>
                <textarea rows="5" value={skill} onChange={e => setSkill(e.target.value)}/>
                </div>
                <div className={styles['btn-block']}>
                {/* <button type="button" onClick={handleSwitch}>Create</button> */}
                <ResumeDisplay f={firstname} l={lastname} e={email} s={salary} ex={experience} m={major} p={phone} l2={location} sk={skill}/>

                </div>
            </form>
            </div>
        </body>

    {/* <ResumeDisplay prop1={firstname} prop2={lastname}/> */}


    </section>
  )
}

export default Resume

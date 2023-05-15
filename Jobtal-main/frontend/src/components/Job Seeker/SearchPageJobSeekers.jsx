import React from 'react';
import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbars/employee_navbar';
import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const SearchJobSeekers = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const handleClick = () =>{
        navigate('/applyjob');
    }

    useEffect(() => {
        axios
          .post('http://localhost:3001/api/searchjobs')
          .then(res => {
            setAllJobs(res.data);
            setFilteredJobs(res.data);
          })
          .catch(err => console.log(err));
      }, []);

    const handleChange = (e) => {
        const searchText = e.target.value;
        const filteredList = allJobs.filter(job => {
            return Object.keys(job).some(key => {
                return job[key].toString().toLowerCase().includes(searchText.toLowerCase());
            });
        });
        setFilteredJobs(filteredList);
    }

    return(
        <div>
            {/* <Navbar></Navbar> */}
            <h1 style={{position: 'absolute', top:'200px',left: '20px', fontSize: "50px"}}>
                Your search results:
            </h1>
            <input
                type="text"
                placeholder="Search Jobs"
                onChange={handleChange}
            />
            <div style={{display:'flex', flexDirection:'column', borderRadius:'300px', marginTop:'15vh', rowGap:"40px", marginRight:'10px', marginLeft:'10px'}}>
                <div style={{display: 'flex', flexDirection:'row', columnGap:'20px'}}>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        {filteredJobs.map((job)=>(
                            <div key={job.id}>
                                <h3>{job.title}</h3>
                                <p>Location: {job.location}</p>
                          
                                <p>Industry: {job.industry}</p>

                                <p>Job Level: {job.jobLevel}</p>

                                <p>Salary: {job.salary}</p>

                                <p>Reigstration Number: {job.regNumber}</p>
                     
                                <button style={{}} onClick={handleClick}>Apply Now</button>
                            </div>
                        ))}
                    </div>
               
                </div>
                
            </div>

        </div>
  
    )

}

export default SearchJobSeekers;
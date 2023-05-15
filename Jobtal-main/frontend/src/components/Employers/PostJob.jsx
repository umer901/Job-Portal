import React, { useState } from 'react';
import axios from 'axios'; 
import img1 from './logo.png';
import './PostJob.css';
import { useNavigate } from 'react-router-dom';

export default function MyForm() {

  const navigate = useNavigate();

  const [textValue, setTextValue] = useState('');
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');
  const [textValue3, setTextValue3] = useState('');
  const [textValue4, setTextValue4] = useState('');
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');
  const [dropdownValue4, setDropdownValue4] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data object
    const data = {
      cnic: textValue,
      registrationNumber: textValue1,
      title: textValue2,
      desc: textValue3,
      company: textValue4,
      industry: dropdownValue1,
      location: dropdownValue2,
      jobLevel: dropdownValue3,
      salary: dropdownValue4,
    };

    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post('http://localhost:3001/submitjob', data);

      // Handle successful response
      console.log(response);
      window.alert("Job Posted Successfully");
      navigate('/alljobs');
      // You can also reset the form values here if needed
    } catch (error) {
      // Handle errors
      console.error('Error sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <img src={img1} alt="" className="img-edit" /> */}
      <h1 className="page-title">Post a Job</h1>
      <ul className="search-description">Do you have a new job opening? Select the specifications from the criteria below to post a new opening</ul>
      <h1 className="inner-title">Select the criteria</h1>
      <label className="cnic-heading">
        CNIC number:
        <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      </label>
      
      <label className="reg-num">
        Registration number:
        <input type="text" value={textValue1} onChange={(e) => setTextValue1(e.target.value)} />
      </label>

      <label className="title">
        Job Title:
        <input type="text" value={textValue2} onChange={(e) => setTextValue2(e.target.value)} />
      </label>

      <label className="desc">
        Job Description:
        <input type="text" value={textValue3} onChange={(e) => setTextValue3(e.target.value)} />
      </label>

      <label className="company">
        Company:
        <input type="text" value={textValue4} onChange={(e) => setTextValue4(e.target.value)} />
      </label>
      
      <label className="industry-heading">
        Industry:
        <select value={dropdownValue1} onChange={(e) => setDropdownValue1(e.target.value)}>
          <option value="option1">Please select industry</option>
          <option value="Tech">Tech</option>
          <option value="Film and Drama">Film and Drama</option>
          <option value="Medical">Medical</option>
          <option value="Textile">Textile</option>
          <option value="FMCG">FMCG</option>
        </select>
      </label>
      
      <label className="location-heading">
        Locations:
        <select value={dropdownValue2} onChange={(e) => setDropdownValue2(e.target.value)}>
          <option value="option1">Please select location</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
        </select>
      </label>
      
      <label className="joblevel-heading">
        Job Level:
        <select value={dropdownValue3} onChange={(e) => setDropdownValue3(e.target.value)}>
          <option value="option1">Please select Job level</option>
          <option value="CEO">CEO</option>
          <option value="Director">Director</option>
          <option value="Senior Manager">Senior Manager</option>
          <option value="Manager">Manager</option>
          <option value="Floor Manager">Floor Manager</option>
          <option value="Officer level 3">Officer level 3</option>
          <option value="Officer level 2">Officer level 2</option>
          <option value="Officer level 1">Officer level 1</option>
        </select>
      </label>
      
      <label className="salary-heading">
        Salary:
        <select value={dropdownValue4} onChange={(e) => setDropdownValue4(e.target.value)}>
          <option value="option1">Please select Salary range</option>
          <option value="40000-59999">40,000-59,999</option>
          <option value="60000-99999">60,000-99,999</option>
          <option value="100000-149999">100,000-149,999</option>
          <option value="150000-199999">150,000-199,999</option>
          <option value="200000-299999">200,000-299,999</option>
          <option value="300000-499999">300,000-499,999</option>
          <option value="500000">500,000 and above</option>
        </select>
      </label>
      
      <button className="button-style" type="submit">Submit</button>
    </form>
  );
}
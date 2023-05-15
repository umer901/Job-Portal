import React, { useState } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/employeeprofile', {
      name,
      location,
      phoneNumber,
    })
      .then((response) => {
        console.log(response);
        alert('Employee Submitted Successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('Error submitting employee!');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeSearch;
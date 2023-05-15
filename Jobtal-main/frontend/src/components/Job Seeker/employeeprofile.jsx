import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeProfile = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profile, setProfile] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/employeeprofile', {
        name,
        location,
        phoneNumber,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            alert('Please enter all details');
        });
    }
    
    const handleViewProfile = () => {
        axios.get(`http://localhost:3001/employeeprofile/${name}`)
        .then((response) => {
            console.log(response);
            setProfile(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert('Error retrieving profile!');
        });
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
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
        <button onClick={handleViewProfile}>View Profile</button>
        {profile ?
            <div>
            <p>Userame: {profile.name}</p>
            <p>Location: {profile.location}</p>
            <p>Phone Number: {profile.phoneNumber}</p>
            </div>
            : null
        }
        </div>
    );
    };
    
    export default EmployeeProfile;
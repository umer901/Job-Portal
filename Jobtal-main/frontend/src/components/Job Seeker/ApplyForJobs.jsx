import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbars/employee_navbar';

import './ApplyJob.css';

const ApplyJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    education: '',
    gpa: '',
    cv: null,
    experience: '',
  });
  const experienceOptions = ['Less than 1 year', '1-2 years', '2-5 years', '5+ years'];
  const [formErrors, setFormErrors] = useState({
    education: '',
    gpa: '',
    cv: '',
    experience: '',
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleExperienceChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, experience: value });
    setFormErrors({ ...formErrors, experience: '' });
  };

  const handleFileInputChange = (event) => {
    setFormData({ ...formData, cv: event.target.files[0] });
    setFormErrors({ ...formErrors, cv: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.education.trim()) {
      errors.education = 'Please enter your education.';
    }
    if (!formData.gpa.trim()) {
      errors.gpa = 'Please enter your GPA.';
    }
    if (!formData.cv) {
      errors.cv = 'Please upload your CV.';
    }
    if (!formData.experience) {
      errors.experience = 'Please select your experience.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const data = new FormData();
    data.append('education', formData.education);
    data.append('gpa', formData.gpa);
    data.append('cv', formData.cv);
    data.append('experience', formData.experience);
    try {
    await axios.post('http://localhost:3001/submit', data);
    navigate('/success');
    } catch (error) {
    console.error(error);
    }
    };

    return (
    <div>
        <Navbar />
        <div className="apply-job-container">
            <form className="apply-job-form" onSubmit={handleSubmit}>
            <div className="apply-job-input-container">
            <label htmlFor="education">Education:</label>
            <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    />
            {formErrors.education && (
            <div className="apply-job-error">{formErrors.education}</div>
            )}
            </div>
            <div className="apply-job-input-container">
            <label htmlFor="gpa">GPA:</label>
            <input
                    type="text"
                    id="gpa"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    />
            {formErrors.gpa && (
            <div className="apply-job-error">{formErrors.gpa}</div>
            )}
            </div>
            <div className="apply-job-input-container">
            <label htmlFor="experience">Experience:</label>
            <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleExperienceChange}
                    >
            <option value="">Select years of experience</option>
            {experienceOptions.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
            ))}
            </select>
            {formErrors.experience && (
            <div className="apply-job-error">{formErrors.experience}</div>
            )}
            </div>
            <div className="apply-job-input-container">
            <label htmlFor="cv">CV:</label>
            <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    />
            {formErrors.cv && (
            <div className="apply-job-error">{formErrors.cv}</div>
            )}
            </div>
            <button type="submit" className="apply-job-button">
            Submit
            </button>
            </form>
        </div>
    </div>
    );
    };

export default ApplyJob;

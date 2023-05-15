import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:3001/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
        value={search}
      />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id}>
            <li> {employee.name}</li>
            <li>{employee.email}</li>
            <br></br>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSearch;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:8080/api/employees')
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
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSearch;

// now write backend node-js code. it should take the input form using post and check the table 'EmployeeProfile' to see if it already has an entry with that name. If yes, edit the rest of the columns with the new information otherwise if it is a new name then create a new row. 


//now write backend node-js code with two functionalities. Firstly it should take the input form using post and add it to a table called EmployeeProfile. Then it should join the EmployeeProfile table with the Employee table if they have the same name as the one in the form, and return this data to the frontend 
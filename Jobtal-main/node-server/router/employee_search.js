const express = require('express');
const router = express.Router();
const Employee = require('../model/userSchema');


router.post('/api/employees', async (req, res) => {
    const employees = await Employee.find({ userType: "Job Seeker" });
    res.json(employees);
    console.log(employees)
});

module.exports = router;
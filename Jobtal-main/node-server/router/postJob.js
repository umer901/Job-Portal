const express = require('express');
const router = express.Router();
const Data = require('../model/postJob');

router.post('/submitjob', (req, res) => {
  const newData = new Data({
    cnic: req.body.cnic, // changed from req.body.textValue
    regNumber: req.body.registrationNumber, // changed from req.body.textValue1
    title: req.body.title, // changed from req.body.textValue2
    desc: req.body.desc, // changed from req.body.textValue3
    company: req.body.company, // changed from req.body.textValue4
    industry: req.body.industry, // changed from req.body.dropdownValue1
    location: req.body.location, // changed from req.body.dropdownValue2
    jobLevel: req.body.jobLevel, // changed from req.body.dropdownValue3
    salary: req.body.salary, // changed from req.body.dropdownValue4
  });

  // const { cnic, regNumber, title, description, industry, locaion, jobLevel, salary } = req.body;

  // res.send(req.body);

  // if (!cnic || !regNumber || !title || !description || !industry || !location || !jobLevel || !salary) {
  //   return res.status(422).json({ error: "Please fill all the fields" });
  // }
  
  newData.save().then(() => {
    res.status(200).send('Data saved successfully');
  }).catch((err) => {
    res.status(400).send('Data save error:', err);
  });
});

module.exports = router;
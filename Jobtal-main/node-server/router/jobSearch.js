const express = require('express');
const router = express.Router();
const postJob = require('../model/postJob');

router.get('/searchjobs', async (req, res) => {
  const { regNumber, industry, location, jobLevel, salary, organizationName } = req.query;

  try {
    // Build the search query based on the provided parameters
    const query = {};
    if (regNumber) query.regNumber = regNumber;
    if (industry) query.industry = industry;
    if (location) query.location = location;
    if (jobLevel) query.jobLevel = jobLevel;
    if (salary) {
      const [minSalary, maxSalary] = salary.split('-');
      const parsedMinSalary = parseInt(minSalary);
      const parsedMaxSalary = parseInt(maxSalary);
      if (!isNaN(parsedMinSalary) && !isNaN(parsedMaxSalary)) {
        query.salary = { $gte: parsedMinSalary, $lte: parsedMaxSalary };
      } else {
        query.salary = null;
      }
    }
    if (organizationName) query.organizationName = organizationName;

    console.log('Search query:', query);

    // Search for jobs based on the query
    const jobs = await datas.find(query).lean();

    // Return the search results as JSON
    res.json(jobs);
  } catch (error) {
    console.error('Error searching for jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

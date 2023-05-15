const express = require('express');
const router = express.Router();
const Data = require('../model/postJob');

router.post('/api/searchjobs', async (req, res) => {
    try {
      const searchResult = await Data.find({
      });
      res.json(searchResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;
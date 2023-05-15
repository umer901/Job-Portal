const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const JobApplication = require('../model/jobApplication');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize multer
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('cv');

// Check file type function
function checkFileType(file, cb) {
  // Allowed file types
  const filetypes = /pdf|doc|docx/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: File type not supported');
  }
}

// Route to submit job application
router.post('/submit', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      try {
        const { education, gpa, experience } = req.body;
        const cv = req.file.path;
        const jobApplication = new JobApplication({
          education,
          gpa,
          experience,
          cv,
        });
        const savedApplication = await jobApplication.save();
        res.status(201).json(savedApplication);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
});

module.exports = router;

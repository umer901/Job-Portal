const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  education: {
    type: String,
    required: true,
  },
  gpa: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);

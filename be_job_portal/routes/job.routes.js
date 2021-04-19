const express = require('express');
const router = express.Router();

const JobController = require('../controllers/job.controllers')

router.get('/jobs', JobController.getJobs)

module.exports = router;
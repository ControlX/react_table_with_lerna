const JobService = require('../services/job.services')    

exports.getJobs = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
    try {
        const jobs = await JobService.getJobs({}, page, limit)
        return res.status(200).json({ status: 200, data: jobs, message: "Success!" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
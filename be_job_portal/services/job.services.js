const Job = require('../models/job.model')

exports.getJobs = async function (query, page, limit) {

    try {
        const jobs = await Job.find(query)
        return jobs;
    } catch (e) {
        // Log Errors
        throw Error('Error while paginating jobs')
    }
}
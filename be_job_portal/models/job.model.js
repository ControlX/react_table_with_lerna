const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const JobSchema = new mongoose.Schema({
        _id: ObjectID,
        position: String,
        experience: String,
        location: String,
        skillset: Array,
        salary: String,
        date: String
});

const Job = mongoose.model('jobs', JobSchema);

module.exports = Job;
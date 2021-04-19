const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const jobRouter = require('./routes/job.routes');
const masterData = require('./master_data');

const app = express();
const port = config.get('port');
const mongoDB = 'mongodb://' + config.dbConfig.host + '/' + config.dbConfig.dbName;

app.use(cors());
app.use(express.json());
app.use(jobRouter);

//init mongoose
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function initServer() {
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    //create temporary data
    db.collection('jobs').insertMany(masterData);

    console.log(`Server started at port: ${port}`);
  });
}

initServer();

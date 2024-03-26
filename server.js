//Adapted from 

//Importing the packages needed for the server to function
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');

//Importing page routes with controllers
const userRouter = require('./pageRoutes/userRoute');
const loginRouter = require('./pageRoutes/loginRoute');
const offerGrantsRouter = require('./pageRoutes/offerGrantsRoute');
const resourceRouter = require('./pageRoutes/resourcesRoute');
const searchGrantsRouter = require('./pageRoutes/searchGrantsRoute');
const reviewedReportsRouter = require('./pageRoutes/reviewedReportRoute');
const accessReportsRouter = require('./pageRoutes/accessReportsRoute');
const approveProposalRouter = require('./pageRoutes/approveProposalRoute');
const trackProposalRouter = require('./pageRoutes/trackProposalRoute');
const writeProposalRouter = require('./pageRoutes/writeProposalRoute');
const monitorAwardRouter = require('./pageRoutes/monitorAwardRoute');
const submitReportsRouter=require('./pageRoutes/submitReportRoute');

//Importing routes for file streaming
const writeProposalFilesRouter = require('./pageRoutes/writeProposalFilesRoute');
const offerGrantsFilesRouter = require('./pageRoutes/offerGrantsFilesRoute');
const submitReportsFilesRouter = require('./pageRoutes/submitReportFilesRoute');

//Connecting mongodb and mongoose

mongoose.connect(config.database);
const connectionDB = mongoose.connection
	
connectionDB.on('error', (error) => {
    console.log(error)
})

connectionDB.once('connected', () => {
    console.log('MongoDB connection successful!');

//connection for file streaming
    let bucket1;
    let bucket2;
    let bucket3;
    bucket1 = new mongoose.mongo.GridFSBucket(connectionDB, {
        bucketName: "writeProposal", });
    bucket2 = new mongoose.mongo.GridFSBucket(connectionDB, {
            bucketName: "offerGrants", });
    bucket3 = new mongoose.mongo.GridFSBucket(connectionDB, {
                bucketName: "submitReports", });
    console.log('Buckets were connected successfully!');
})

//Declaring a server port number
const port = 3000;

//Creating a variable to start a new express application
const app = express();

//Adding middleware: Parsing incoming requests with JSON payloads. 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Checking API to ensure server port is fully active using an html file
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'static.html'));
});

app.post('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'static.html'));
});

app.put('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'static.html'));
});

app.delete('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'static.html'));
});

//Routing for all the models
app.use('/user', userRouter); 
app.use('/login', loginRouter);
app.use('/offers', offerGrantsRouter);
app.use('/resources', resourceRouter);
app.use('/search', searchGrantsRouter);
app.use('/reviewed-reports', reviewedReportsRouter);
app.use('/access-reports', accessReportsRouter);
app.use('/approve-proposals', approveProposalRouter);
app.use('/track-proposals', trackProposalRouter);
app.use('/write-proposals', writeProposalRouter);
app.use('/monitor-award', monitorAwardRouter);
app.use('/submit-reports', submitReportsRouter);

//Routing for file streaming for file streaming
app.use('/proposals', writeProposalFilesRouter);
app.use('/reports', submitReportsFilesRouter);
app.use('/offerFile', offerGrantsFilesRouter);

//Starting server on selected port
app.listen(port, ()=>{
	console.log(`Starting server on port ${port}`);
});


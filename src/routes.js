const express = require('express');
const router = express.Router();
const { apiCall } = require('./index');
const { carSearch } = require('./search');

// Define route handlers
router.get('/run-test', (req, res) => {
    // Logic to run the test function or perform any other desired functionality
    // Send a response back to the client
    apiCall();
    res.send('Test function executed successfully');
});

router.post('/car-search', (req, res) => {
    // Logic to run the test function or perform any other desired functionality
    // Send a response back to the client
    console.log("here");
    console.log(req.body)
    carSearch(req.body);
    res.send('car-search executed successfully');
});

// Export the router to make it accessible in other files
module.exports = router;

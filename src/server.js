const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(cors());

// Serve static files from the Vue app build output directory
app.use(express.static(path.join(__dirname, '../../carfinderclient/dist')));

app.use('/', routes);

// Handle all routes by serving Vue app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../carfinderclient/dist/index.html'));
});


//app.listen(port, () => {
  //console.log(`Server is running on http://localhost:${port}`);
//});

app.listen(port, '10.0.91.35', () => {
  console.log(`Server is running on http://10.0.91.35:${port}`);
});

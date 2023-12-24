const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the Vue app build output directory
app.use(express.static(path.join(__dirname, '../../carfinderclient/dist')));

// Handle all routes by serving Vue app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../carfinderclient/dist/index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

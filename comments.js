// Create web server
// Create comments API
// Use comments API in web server

// Import the express module
const express = require('express');
// Create an express application
const app = express();

// Import the comments module
const comments = require('./comments');

// Use the comments API in the web server
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
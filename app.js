const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes'); // Import task routes

const app = express(); // Create an Express app

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// API Routes
app.use('/api/tasks', taskRoutes); // Mount task routes at `/api/tasks`

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ error: 'Something went wrong!' }); // Send a generic error message
});

// 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found.' });
});

module.exports = app; // Export the app for use in index.js

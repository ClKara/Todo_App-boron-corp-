// index.js
const sequelize = require('./configuration/database'); // Database configuration
const Task = require('./models/Task'); // Import Task model to register it with Sequelize

(async () => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('Database connection established.');

        // Sync all models with the database
        await sequelize.sync({ alter: true }); // Use { force: true } for development only
        console.log('All models were synchronized successfully.');

        // Start the server
        const app = require('./app'); // Import the Express app
        const PORT = 3000; // Define the port
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

process.on('SIGINT', () => {
    sequelize.close()
      .then(() => {
        console.log('Database connection closed.');
        process.exit(0);
      })
      .catch(err => {
        console.error('Error closing database connection:', err);
        process.exit(1);
      });
  });

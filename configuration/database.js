const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("todo_app", "Channa Karawita", "Channa0987", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,

});

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
  
  module.exports = sequelize;
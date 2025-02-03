const { DataTypes } = require('sequelize');
const sequelize = require('../configuration/database');

const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: true, 
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE, 
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Completed'), 
      allowNull: false,
      defaultValue: 'Pending', 
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'), 
      allowNull: false,
      defaultValue: 'Medium', 
    },
  }, {
    tableName: 'tasks', 
    timestamps: true, 
  });
  
  module.exports = Task;
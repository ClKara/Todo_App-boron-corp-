const Task = require('../models/Task');

// Get all tasks (with optional filtering)
const getTasks = async (req, res) => {
  try {
    const { status, dueDate } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (dueDate) filter.dueDate = dueDate;

    const tasks = await Task.findAll({ where: filter });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks.' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;
    const newTask = await Task.create({ title, description, dueDate, status, priority });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task.' });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, status, priority } = req.body;

    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    await task.update({ title, description, dueDate, status, priority });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task.' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task.' });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("Task manager app - get request ");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Task manager app - update request!");
};

const deleteTask = (req, res) => {
  res.send("Task manager app - delete request!");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

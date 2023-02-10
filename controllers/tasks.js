const getAllTasks = (req, res) => {
  res.send("Task manager app - get request ");
};

const createTask = (req, res) => {
  res.send("Task manager app - post request!");
};

const getTask = (req, res) => {
  res.send("Task manager app - get request by id!");
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

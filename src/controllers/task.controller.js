const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user.id });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { page = 1, limit = 5, status } = req.query;

  const query = { user: req.user.id, isDeleted: false };
  if (status) query.status = status;

  const tasks = await Task.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ dueDate: 1 });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { isDeleted: true }
  );
  res.json({ message: "Task archived" });
};

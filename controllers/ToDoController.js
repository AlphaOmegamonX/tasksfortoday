const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const Todo = await ToDoModel.find();
  res.send(Todo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then(() =>
    res.set(201).send("Added Successfully...")
  );
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id).then(() =>
    res.set(201).send("Deleted Successfully...")
  );
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text }).then(() =>
    res.set(201).send("Updated Successfully...")
  );
};

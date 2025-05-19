const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: 18,
    max: 65,
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
    min: [0, 'Salary cannot be negative'],
  },
});

module.exports = mongoose.model('Employee', employeeSchema);

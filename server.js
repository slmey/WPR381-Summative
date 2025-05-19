const express = require('express');
const router = express.Router();
const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

router.post('/add', addEmployee);
router.get('/view/:id', getEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

module.exports = router;
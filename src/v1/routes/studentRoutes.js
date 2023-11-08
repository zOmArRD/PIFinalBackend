const express = require('express');
const studentController = require('../../controllers/studentController');

const router = express.Router();

router
    .get('/', studentController.getAllStudents)
    .get('/:id', studentController.getStudentById)
    .post('/', studentController.createStudent)
    .patch('/:id', studentController.updateStudent)
    .delete('/:id', studentController.deleteStudent);

module.exports = router;
const studentService = require("../services/studentService");

const getAllStudents = async (req, res) => {
    const allStudents = studentService.getAllStudents();
    res.send("Get all students");
};

const getStudentById = async (req, res) => {
    const student = studentService.getStudentById();
    res.send(`Get student with id ${req.params.id}`);
}

const createStudent = async (req, res) => {
    const createdStudent = studentService.createStudent();
    res.send("Create a new student");
}

const updateStudent = async (req, res) => {
    const updatedStudent = studentService.updateStudent();
    res.send(`Update student with id ${req.params.id}`);
}

const deleteStudent = async (req, res) => {
    studentService.deleteStudent();
    res.send(`Delete student with id ${req.params.id}`);
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
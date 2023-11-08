const Student = require('../database/Student');

const getAllStudents = () => {
    return Student.getAllStudents();
};

const getStudentById = (id) => {
    return Student.getStudentById(id);
};

const createStudent = (studentData) => {
    return Student.createStudent(studentData);
};

const updateStudent = (id, studentData) => {
    return Student.updateStudent(id, studentData);
};

const deleteStudent = (id) => {
    return Student.deleteStudent(id);
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
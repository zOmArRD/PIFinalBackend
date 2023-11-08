const studentService = require("../services/studentService");

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await studentService.getAllStudents();
        res.json(allStudents);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener todos los estudiantes" });
    }
};

const getStudentById = async (req, res) => {
    const studentId = req.params.id;

    try {
        const student = await studentService.getStudentById(studentId);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: "Estudiante no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el estudiante" });
    }
}

const createStudent = async (req, res) => {
    const studentData = req.body;

    try {
        const createdStudent = await studentService.createStudent(studentData);
        res.status(201).json(createdStudent);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el estudiante" });
    }
}

const updateStudent = async (req, res) => {
    const studentId = req.params.id;
    const studentData = req.body;

    try {
        const updatedStudent = await studentService.updateStudent(studentId, studentData);
        if (updatedStudent) {
            res.json(updatedStudent);
        } else {
            res.status(404).json({ error: "Estudiante no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el estudiante" });
    }
}

const deleteStudent = async (req, res) => {
    const studentId = req.params.id;

    try {
        const deletedStudent = await studentService.deleteStudent(studentId);
        if (deletedStudent) {
            res.json({ message: "Estudiante eliminado con éxito" });
        } else {
            res.status(404).json({ error: "Estudiante no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el estudiante" });
    }
}
module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}
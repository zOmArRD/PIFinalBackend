const db = require("./sqliteDB");

const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM students", (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

const getStudentById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM students WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

const createStudent = (studentData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
        const { name, age, grade } = studentData;

        db.run(query, [name, age, grade], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, name, age, grade });
            }
        });
    });
};

const updateStudent = (id, studentData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?';
        const { name, age, grade } = studentData;

        db.run(query, [name, age, grade, id], function (err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('No se encontró ningún estudiante para actualizar'));
            } else {
                resolve({ id, name, age, grade });
            }
        });
    });
};

const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM students WHERE id = ?';

        db.run(query, [id], function (err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('No se encontró ningún estudiante para eliminar'));
            } else {
                resolve({ message: 'Estudiante eliminado con éxito' });
            }
        });
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

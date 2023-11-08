const express = require("express");

const bodyParser = require("body-parser");

const v1StudentRoutes = require("./v1/routes/studentRoutes");

const db = require("./database/sqliteDB");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/students", v1StudentRoutes);

db.run(`
    CREATE TABLE IF NOT EXISTS students
    (
        id    INTEGER PRIMARY KEY AUTOINCREMENT,
        name  TEXT NOT NULL,
        age   INTEGER,
        grade REAL
    );
`);

db.run(`
    INSERT INTO students (name, age, grade)
    VALUES ('Juan Pérez', 20, 90.5),
           ('Ana Gómez', 21, 85.0),
           ('Luis Martínez', 19, 92.5),
           ('María Rodríguez', 22, 88.0),
           ('Carlos Sánchez', 20, 91.0),
           ('Sofía López', 23, 87.5),
           ('Laura Ramírez', 18, 93.5),
           ('Pedro García', 21, 84.0),
           ('Carmen Torres', 22, 89.5),
           ('Manuel Fernández', 20, 90.0);
`);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
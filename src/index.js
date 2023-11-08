const express = require("express");

const v1studentRoutes = require("./v1/routes/studentRoutes");
const db = require("./database/sqliteDB");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/students", v1studentRoutes);

// Crear la tabla students para sqlite3
db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    country TEXT NOT NULL
)`);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
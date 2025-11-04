require('dotenv').config()
console.log()

const express = require('express'); // Importamos express
const app = express(); // Creamos servidor
const port = process.env.PORT || 3000; // Puerto de pruebas

// Habilitamos recepción de JSON por mi backend
app.use(express.json());

// Rutas
const filmsRoutes = require("./routes/films.routes");

// GET / Prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a mi Ejercicio API REST de FILMS")
})

// Rutas habilitadas / Usar las rutas definidas
app.use("/api/films", filmsRoutes);

app.listen(port, () => {
  console.log(`Puerto de ejercicio API REST FILMS -> ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;
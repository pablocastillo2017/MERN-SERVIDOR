const express = require("express");
const conectarDB = require("./config/db");

// Crear Servidor
const app = express();

// Conectar a La Base de datos
conectarDB();
// Puerto de la app
const PORT = process.env.PORT || 4000;

// Arrancar la APP
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

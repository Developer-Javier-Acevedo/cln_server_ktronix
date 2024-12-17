const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Permite peticiones del frontend

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

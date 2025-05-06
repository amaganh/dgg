import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Servir contenido estático
app.use(express.static(path.join(__dirname, '../public')));

// Ruta raíz que devuelve el HTML
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
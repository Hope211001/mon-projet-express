const express = require('express');
const app = express();

// Définir un port
const PORT = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Express !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});



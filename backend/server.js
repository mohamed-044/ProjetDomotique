const express = require('express');
const mysql = require('mysql');

// Créer une application Express
const app = express();

// Configurer la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'crif2024sn',
  database: 'test1'
});

// Établir la connexion à la base de données MySQL
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Définir un endpoint pour récupérer les données depuis la base de données
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM web';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête MySQL :', err);
      res.status(500).json({ error: 'Erreur serveur' });
      return;
    }
    res.json(results);
  });
});

// Démarrer le serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

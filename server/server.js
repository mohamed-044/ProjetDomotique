const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'crif2024sn',
  database: 'test1'
});

// Établissement de la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL :', err);
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

// Exemple de requête SQL pour récupérer des données
connection.query('SELECT * FROM web', (err, rows) => {
  if (err) {
    console.error('Erreur lors de l\'exécution de la requête SQL :', err);
    throw err;
  }
  console.log('Résultat de la requête :', rows);
});

// Fermeture de la connexion à la base de données lorsque vous avez fini de l'utiliser
connection.end();

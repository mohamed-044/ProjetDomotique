# Box Domotique
## Description
### Box Domotique est un projet de gestion et de contrôle d'appareils connectés au sein d'une maison intelligente. Développé en React Native avec une architecture API REST en backend, cette application permet de superviser et de contrôler différents capteurs et appareils à distance, directement depuis une interface mobile.

### L'objectif est de centraliser le contrôle des appareils domotiques, de visualiser les données en temps réel (température, luminosité, etc.), d'activer ou de désactiver certains capteurs, et de gérer des scénarios d'automatisation pour optimiser le confort et l'efficacité énergétique.

## Fonctionnalités principales
## Visualisation des capteurs :

### Affichage en temps réel des données collectées par les capteurs (ex : température, humidité).
### Possibilité de changer l'état des capteurs (activer/désactiver).
## Gestion des appareils :


### Liste des appareils connectés avec options de gestion individuelle.
### Activation/désactivation d'appareils depuis l'application mobile.
## Scénarios automatisés :

### Création de scénarios pour automatiser certaines actions en fonction des conditions détectées par les capteurs.
### Historique des événements :

### Suivi des actions et modifications d'état des capteurs dans un historique détaillé.
## Captures d'écran

![Page Gestion Appareils Application mobile](https://github.com/user-attachments/assets/e4b7a58e-9791-4375-a888-455a312766f4)

![Page Historique Application mobile](https://github.com/user-attachments/assets/d0945704-b0cf-4c2d-9265-641389c72535)

## Technologies utilisées
## Frontend :

### React Native
### Axios pour les requêtes HTTP
### Navigation avec React Navigation
## Backend :

### Node.js avec Express
### Base de données (ajustez en fonction de votre choix, ex: MongoDB, MySQL)
## Autres :

### API RESTful pour les échanges de données
### Gestion asynchrone des requêtes avec Promises (then, catch) et async/await
###  Installation et Configuration
### Prérequis
### Avant de commencer, assurez-vous d'avoir installé :

### Node.js (version recommandée : 14.x ou plus récente)
### NPM (ou Yarn) pour la gestion des dépendances
### Un simulateur ou un appareil Android/iOS pour tester l'application
## Instructions
## Clonez le dépôt GitHub :

### bash
### Copier le code
### git clone git@github.com:mohamed-044/ProjetDomotique.git
### cd github-projet-domotique
## Installez les dépendances nécessaires :

### bash
### Copier le code
### npm install
## Lancez le serveur backend :

### bash
### Copier le code
### node server.js
## Lancez l'application mobile :

### bash
### Copier le code
### npx react-native run-android # ou run-ios pour iOS
### Configuration
### Vous devez configurer l'URL du serveur backend dans le code pour qu'il pointe vers l'adresse de votre serveur (par défaut http://192.168.0.05:3000 dans l'application).

## Utilisation
### Lancer l'application sur un émulateur ou appareil réel.
### Accédez à l'écran d'accueil où vous pouvez choisir d'afficher les capteurs, l'historique ou gérer les appareils.
### Utilisez les différents écrans pour interagir avec vos capteurs et appareils connectés.
### Structure du projet
## Voici un aperçu rapide de l'architecture du projet :

### bash

### /assets                  # Contient les images et ressources utilisées dans l'application
### /components              # Composants réutilisables de l'application
### /screens                 # Différentes pages/écrans de l'application
###   Accueil.js             # Page d'accueil avec le logo et accès aux fonctionnalités
###  ChoixCapteurs.js       # Page de gestion des capteurs
###  GestionAppareils.js    # Page de gestion des appareils connectés
###  Historique.js          # Page pour consulter l'historique des événements
###  Scenario.js            # Page de gestion des scénarios d'automatisation
### server.js                # Fichier backend pour gérer les requêtes et interagir avec la base de données
## Améliorations futures
### Ajouter des notifications push pour alerter des événements importants (par exemple, si un capteur dépasse un seuil critique).
### Intégration avec des assistants vocaux comme Google Assistant ou Alexa pour des commandes vocales.
### Amélioration de l'interface utilisateur avec un design plus intuitif et des animations.

## Auteur
### Ce projet a été développé par Mohamed Boulatika, dans le cadre de mon BTS SNIR.

## Licence
### Ce projet est sous licence MIT.

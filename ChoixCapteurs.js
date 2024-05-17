import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';

const ChoixCapteurs = () => {
  const [capteurs, setCapteurs] = useState([]);

  // Effectuer la requête GET lors du chargement initial du composant
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données depuis le serveur
    const fetchData = async () => {
      try {
        // Effectuer une requête GET vers le serveur pour récupérer les données des capteurs
        const response = await axios.get('http://192.168.0.20:3006/capteurs');
        // Mettre à jour l'état avec les données reçues
        setCapteurs(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
        // Afficher une alerte en cas d'erreur
        Alert.alert('Erreur', 'Erreur lors de la récupération des données');
      }
    };

    // Appeler la fonction fetchData pour récupérer les données
    fetchData();
  }, []); // Utiliser un tableau vide comme dépendance pour exécuter l'effet une seule fois

  // Fonction pour allumer un capteur sélectionné
  const handleAllumer = (capteur) => {
    console.log(`Capteur ${capteur.nom} allumé`);
    Alert.alert(`Le capteur ${capteur.nom} est allumé`);
    // Envoyer une requête POST au serveur pour allumer le capteur
  };

  // Fonction pour éteindre un capteur sélectionné
  const handleEteindre = (capteur) => {
    console.log(`Capteur ${capteur.nom} éteint`);
    Alert.alert(`Le capteur ${capteur.nom} est éteint`);
    // Envoyer une requête POST au serveur pour éteindre le capteur
  };

  // Fonction pour rendre chaque élément de la liste des capteurs
  const renderCapteurItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.nom}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Allumer" onPress={() => handleAllumer(item)} />
        <Button title="Éteindre" onPress={() => handleEteindre(item)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={capteurs}
        renderItem={renderCapteurItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ChoixCapteurs;

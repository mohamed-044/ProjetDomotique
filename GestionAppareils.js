import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';

// Données statiques pour les appareils
const appareils = ['Appareil 1', 'Appareil 2', 'Appareil 3', 'Appareil 4', 'Appareil 5'];

const GestionAppareils = () => {
// Fonction pour allumer l'appareil sélectionné
const handleAllumer = (appareil) => {
  console.log(`Appareil ${appareil} allumé`);
  // Display an alert on the application
  Alert.alert(`L'appareil n°${appareils.indexOf(appareil) + 1} est allumé`);
  // Send a POST request to the server
  axios.post('http://192.168.0.20:3006/action', `L'appareil n°${appareils.indexOf(appareil) + 1} est allumé`)
    .then(response => {
      console.log('Response from server:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.message);
      // Display an error alert on the application
      Alert.alert('Error', error.message);
    });
};

// Fonction pour éteindre l'appareil sélectionné
const handleEteindre = (appareil) => {
  console.log(`Appareil ${appareil} éteint`);
  // Display an alert on the application
  Alert.alert(`L'appareil n°${appareils.indexOf(appareil) + 1} est éteint`);
  // Send a POST request to the server
  axios.post('http://192.168.0.20:3006/action', `L'appareil n°${appareils.indexOf(appareil) + 1} est éteint`)
    .then(response => {
      console.log('Response from server:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.message);
      // Display an error alert on the application
      Alert.alert('Error', error.message);
    });
};

  // Fonction pour rendre chaque élément de la liste des appareils
  const renderAppareilItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Allumer" onPress={() => handleAllumer(item)} />
        <Button title="Éteindre" onPress={() => handleEteindre(item)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={appareils}
        renderItem={renderAppareilItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GestionAppareils;

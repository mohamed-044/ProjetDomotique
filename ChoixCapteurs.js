import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';


const ChoixCapteurs = () => {
  const [capteurs, setCapteurs] = useState([
    { id: 1, nom: 'Capteur 1' },
    { id: 2, nom: 'Capteur 2' },
    { id: 3, nom: 'Capteur 3' },
    { id: 4, nom: 'Capteur 4' },
    { id: 5, nom: 'Capteur 5' },
  ]);

  // Fonction pour allumer un capteur sélectionné
  const handleAllumer = (capteur) => {
    console.log(`Capteur ${capteur.nom} allumé`);
    // Display an alert on the application
    Alert.alert(`Le capteur ${capteur.nom} est allumé`);
    // Send a POST request to the server
    axios.post('http://192.168.0.20:3006/action', `Le capteur ${capteur.nom} est allumé`)
      .then(response => {
        console.log('Response from server:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
        // Display an error alert on the application
        Alert.alert('Error', error.message);
      });
  };

  // Fonction pour éteindre un capteur sélectionné
  const handleEteindre = (capteur) => {
    console.log(`Capteur ${capteur.nom} éteint`);
    // Display an alert on the application
    Alert.alert(`Le capteur ${capteur.nom} est éteint`);
    // Send a POST request to the server
    axios.post('http://192.168.0.20:3006/action', `Le capteur ${capteur.nom} est éteint`)
      .then(response => {
        console.log('Response from server:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
        // Display an error alert on the application
        Alert.alert('Error', error.message);
      });
  };

  // Fonction pour rendre chaque élément de la liste des capteurs
  const renderCapteurItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.nom}</Text>
      {capteurs.some(c => c.id === item.id) ? (
        <View style={{ flexDirection: 'row' }}>
          <Button title="Allumer" onPress={() => handleAllumer(item)} />
          <Button title="Éteindre" onPress={() => handleEteindre(item)} />
        </View>
      ) : null}
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
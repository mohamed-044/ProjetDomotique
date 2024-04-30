import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';

// Données statiques pour les appareils
const appareils = ['Appareil 1', 'Appareil 2', 'Appareil 3', 'Appareil 4', 'Appareil 5'];

const GestionAppareils = () => {
  // Fonction pour allumer l'appareil sélectionné
  const handleAllumer = (appareil) => {
    console.log(`Appareil ${appareil} allumé`);
  };

  // Fonction pour éteindre l'appareil sélectionné
  const handleEteindre = (appareil) => {
    console.log(`Appareil ${appareil} éteint`);
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

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';

// Données statiques pour les capteurs
const capteurs = [
  { id: 1, nom: 'Capteur 1' },
  { id: 2, nom: 'Capteur 2' },
  { id: 3, nom: 'Capteur 3' },
  // Ajoutez d'autres capteurs avec leurs appareils
];

const ChoixCapteurs = () => {
  const [capteursSelectionnes, setCapteursSelectionnes] = useState([]);

  // Fonction pour ajouter un capteur à la liste des capteurs sélectionnés
  const ajouterCapteur = (capteur) => {
    setCapteursSelectionnes([...capteursSelectionnes, capteur]);
  };

  // Fonction pour retirer un capteur de la liste des capteurs sélectionnés
  const retirerCapteur = (capteur) => {
    const nouvelleListeCapteurs = capteursSelectionnes.filter(c => c.id !== capteur.id);
    setCapteursSelectionnes(nouvelleListeCapteurs);
  };

  // Fonction pour rendre chaque élément de la liste des capteurs
  const renderCapteurItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.nom}</Text>
      {capteursSelectionnes.some(c => c.id === item.id) ? (
        <Button title="Retirer" onPress={() => retirerCapteur(item)} />
      ) : (
        <Button title="Ajouter" onPress={() => ajouterCapteur(item)} />
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={capteurs}
        renderItem={renderCapteurItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ padding: 10 }}>
        <Text>Capteurs sélectionnés :</Text>
        <FlatList
          data={capteursSelectionnes}
          renderItem={({ item }) => (
            <Text>- {item.nom}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ChoixCapteurs;

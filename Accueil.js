import React from 'react';
import { View, Button, Image } from 'react-native';

const Accueil = ({ navigation }) => {
  const handleNavigationToChoixCapteurs = () => {
    navigation.navigate('ChoixCapteurs');
  };

  const handleNavigationToHistorique = () => {
    navigation.navigate('Historique');
  };

  const handleNavigationToGestionAppareils = () => {
    navigation.navigate('GestionAppareils');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Utilisation de l'élément Image pour afficher votre logo */}
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 200, height: 200 }} // ajustez la largeur et la hauteur selon vos besoins
        resizeMode="contain" // ajustez le mode de redimensionnement selon vos besoins
      />
      <Button
        title="Choix des capteurs"
        onPress={handleNavigationToChoixCapteurs}
      />
      <Button
        title="Historique"
        onPress={handleNavigationToHistorique}
      />
      <Button
        title="Gestion des appareils"
        onPress={handleNavigationToGestionAppareils}
      />
    </View>
  );
};

export default Accueil;

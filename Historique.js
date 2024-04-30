import React from 'react';
import { View, Text, Button } from 'react-native';

const Historique = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page historique</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
};

export default Historique;

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Accueil';
import ChoixCapteurs from './ChoixCapteurs';
import Historique from './Historique';
import GestionAppareils from './GestionAppareils'; // Assurez-vous d'importer le composant
import Tabs from './navigation/tabs';
import axios from 'axios';
import { Alert } from 'react-native';
import { FlatList } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const sendMessage = async () => {
      try {
        const response = await axios.post('http://192.168.0.20:3006/action', "Le capteur est allumé");
        console.log('Response from server:', response.data);
        Alert.alert('Server Response', response.data);
      } catch (error) {
        console.error('Error:', error.message);
        Alert.alert('Error', error.message);
      }
    };
    sendMessage();
  }, []);

  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  );
};

export default App;
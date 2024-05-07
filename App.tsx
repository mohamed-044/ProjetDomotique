import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Accueil';
import ChoixCapteurs from './ChoixCapteurs';
import Historique from './Historique';
import GestionAppareils from './GestionAppareils'; // Assurez-vous d'importer le composant
import Tabs from './navigation/tabs';
import axios from 'axios';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
const sendMessage = async () => {
  try {
    const message = 'Le capteur est allumé';
    const response = await fetch('http://192.168.0.20:3008/', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: message
    });
    const data = await response.text();
    console.log('Response from server:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
    sendMessage();
  }, []);

  return (
    <NavigationContainer>
        <Tabs />
        <Text>{message}</Text>
    </NavigationContainer>
  );
};

export default App;
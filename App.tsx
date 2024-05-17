// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';
import DrawerNavigator from './drawer';
import Tabs from './navigation/Tabs';

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
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

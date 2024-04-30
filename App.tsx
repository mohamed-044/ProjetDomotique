import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Accueil';
import ChoixCapteurs from './ChoixCapteurs';
import Historique from './Historique';
import GestionAppareils from './GestionAppareils'; // Assurez-vous d'importer le composant
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  );
};

export default App;

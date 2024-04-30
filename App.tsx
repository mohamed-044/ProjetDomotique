import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Accueil';
import ChoixCapteurs from './ChoixCapteurs';
import Historique from './Historique';
import GestionAppareils from './GestionAppareils'; // Assurez-vous d'importer le composant

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="ChoixCapteurs" component={ChoixCapteurs} />
        <Stack.Screen name="Historique" component={Historique} />
        {/* Assurez-vous que 'GestionAppareils' est ajouté en tant que 'Screen' */}
        <Stack.Screen name="GestionAppareils" component={GestionAppareils} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

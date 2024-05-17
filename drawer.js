// navigation/drawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'; // Votre Bottom Tab Navigator
import GestionAppareils from './GestionAppareils';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Accueil" component={Tabs} />
      <Drawer.Screen name="Gestion Appareils" component={GestionAppareils} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

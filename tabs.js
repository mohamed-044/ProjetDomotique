// navigation/tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './Accueil';
import ChoixCapteurs from './ChoixCapteurs';
import Historique from './Historique';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Choix Capteurs" component={ChoixCapteurs} />
      <Tab.Screen name="Historique" component={Historique} />
    </Tab.Navigator>
  );
};

export default Tabs;

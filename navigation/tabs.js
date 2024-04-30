import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from '../Accueil';
import ChoixCapteurs from '../ChoixCapteurs';
import Historique from '../Historique';
import GestionAppareils from '../GestionAppareils';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        },
        style: {
          // Ajoutez ici des styles supplémentaires si nécessaire
        }
      }}
    >
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="ChoixCapteurs" component={ChoixCapteurs} />
      <Tab.Screen name="Historique" component={Historique} />
      <Tab.Screen name="GestionAppareils" component={GestionAppareils} />
    </Tab.Navigator>
  );
};

export default Tabs;

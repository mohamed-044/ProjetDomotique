import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';

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
          ...styles.shadow
        },
        style: {
          // Ajoutez ici des styles supplémentaires si nécessaire
        }
      }}
    >
      <Tab.Screen name="Accueil" component={Accueil} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
              ACCUEIL
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name="ChoixCapteurs" component={ChoixCapteurs} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/capteurs.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
              CAPTEURS
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Historique" component={Historique} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/history.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
              HISTORIQUE
            </Text>
          </View>
        ),
      }} />
      <Tab.Screen name="GestionAppareils" component={GestionAppareils} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image
              source={require('../assets/devices.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
              APPAREILS
            </Text>
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default Tabs;

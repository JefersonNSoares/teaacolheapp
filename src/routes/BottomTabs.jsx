
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Rotina from '../screens/Rotina';
import Emocional from '../screens/Emocional';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') iconName = 'home';
          else if (route.name === 'Rotina') iconName = 'calendar';
          else if (route.name === 'Emoções') iconName = 'happy';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Rotina" component={Rotina} />
      <Tab.Screen name="Emoções" component={Emocional} />
    </Tab.Navigator>
  );
}

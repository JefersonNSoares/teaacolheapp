
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Rotina from '../screens/Rotina';
import Emocional from '../screens/Emocional';
import Formulario from '../screens/formulario'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#007AFF', // Cor de fundo azul
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') iconName = 'home';
          else if (route.name === 'Rotina') iconName = 'calendar';
          else if (route.name === 'Emoções') iconName = 'happy';
          else if (route.name === 'Formulario') iconName = 'document-text';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* <Tab.Screen name="Formulario" component={Formulario} options={{ title: 'Formulario', headerShown: true }} /> */}

      <Tab.Screen name="Início" component={Home} options={{ title: 'Inicio', headerShown: true }}/>

      <Tab.Screen name="Rotina" component={Rotina} options={{ title: 'Rotina', headerShown: true }}/>

      <Tab.Screen name="Emoções" component={Emocional} options={{ title: 'Regulação Emocional', headerShown: true }} />

      

      

    </Tab.Navigator>
  );
}

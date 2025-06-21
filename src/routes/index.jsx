import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Rotina from '../screens/Rotina';
import Emocional from '../screens/Emocional';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Rotina" component={Rotina} />
      <Stack.Screen name="Emocional" component={Emocional} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Rotina from '../screens/Rotina';
import Emocional from '../screens/Emocional';
import Respiracao from '../screens/Emocional/Respiracao';
import Meditacao from '../screens/Emocional/Meditacao';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen name="MainTabs" component={BottomTabs} options={{ title: 'Inicio', headerShown: false }}/>

      <Stack.Screen name="Respiracao" component={Respiracao} />
      <Stack.Screen name="Meditacao" component={Meditacao} />
    </Stack.Navigator>
  );
}

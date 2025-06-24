import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View, Platform, StatusBar as RNStatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/routes/BottomTabs';
import AppNavigator from './src/routes/routes';


const STATUSBAR_HEIGHT = Platform.OS === 'android' ? RNStatusBar.currentHeight : 0;

export default function App() {
  return (
    <>
    <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: '#2196F3' }} />
      <StatusBar style="light" />
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

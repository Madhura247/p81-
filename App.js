import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from "./navigation/DrawerNavigator";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationConatiner>
      <DrawerNavigator />
    </NavigationConatiner>
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigations/Navigations';


//This is our app root folder 
//Basically the whole app is running from here
// I have import the navigation here so the whole app can run

export default function App() {
  return <Navigations />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

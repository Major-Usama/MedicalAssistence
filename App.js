import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigations/Navigations';
import { LogBox } from 'react-native';


//This is our app root folder 
//Basically the whole app is running from here
// I have import the navigation here so the whole app can run

import FireBase from "./src/Database/Firebase"

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  useEffect(()=>{
    FireBase
  },[])
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

import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigations/Navigations';
import FireBase from "./src/Database/Firebase"
export default function App() {
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

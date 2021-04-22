
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PatientDonorScreen from '../screens/PatientDonorScreen';
import AmbulanceLocationScreen from '../screens/AmbulanceLocationScreen';
import DonorLocationScreen from '../screens/DonorLocationScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

//This is the code to set navigations in order to neavigate on various clicks
//For navigation we use place the screens in Stacks ,  

const Stack = createStackNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="PatientDonorScreen" component={PatientDonorScreen} />
        <Stack.Screen name="AmbulanceLocationScreen" component={AmbulanceLocationScreen} />
        <Stack.Screen name="DonorLocationScreen" component={DonorLocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations
// This is a firebase config file
// This code represent the react native app connection with firebase database\
//which we can use throughout the whole app 

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC65adgWsM6AZ557yWreFhOEjhMEc6K9tk",
    authDomain: "medicalassistence-51acc.firebaseapp.com",
    projectId: "medicalassistence-51acc",
    storageBucket: "medicalassistence-51acc.appspot.com",
    messagingSenderId: "921155459835",
    appId: "1:921155459835:web:1147f8ce7be9f1fe942e5e",
    measurementId: "G-J457M2EN9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
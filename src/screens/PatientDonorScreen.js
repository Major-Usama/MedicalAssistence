import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  Platform,
  Switch,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageOverlay from "react-native-image-overlay";
import {
  Fontisto,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";


import {loggingOut} from '../Database/authMethods'




export default function PatientDonorScreen({ navigation }) {

  const onPressLogout=async()=>{
 
 await loggingOut();
    navigation.reset({
      index:0,
      routes:[{name:'HomeScreen'}]
    })   

    


}

  //Tooglr button states(hooks ) to toggle between screens
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Condition to switch between screens on clicking the switch
  //by default its fault it will show the Search Ambulance screen
  //but when you toogle it the state will change to true and the screens content will change
  //This is basically called conditional rendering in React Native
  if (isEnabled === false) {
    return (
      <SafeAreaView style={styles.container}>
        {/* This is Search Ambulance Section */}
        <StatusBar
          barStyle="white-content"
          hidden={false}
          backgroundColor="#353A3D"
        />

        <View>
          <ImageOverlay
            source={require("../images/Ambulance.jpeg")}
            overlayColor="#494A4A"
            overlayAlpha={0.7}
            contentPosition="center"
          >
            <View>
              <Image
                style={styles.profileImage}
                source={require("../images/prof.jpg")}
              />
              <Text style={styles.name}>Awais Murtaza</Text>
            </View>
          </ImageOverlay>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("AmbulanceLocationScreen")}
          >
            <View
              style={{
                ...styles.bottomLists,
                backgroundColor: "#EB0000",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.listcontainer}>
                <Fontisto name="ambulance" size={24} color="#fff" />
                <Text style={styles.listText}>Call Ambulence</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.bottomLists}>
            <View style={styles.listcontainer}>
              <Ionicons
                name="ios-person-circle-outline"
                size={38}
                color="#fff"
              />
              <Text style={styles.listText}>Switch to Donor</Text>
              <View style={{ width: wp("60") }}>
                <Switch
                  trackColor={{ false: "#767577", true: "gray" }}
                  thumbColor={isEnabled ? "orange" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>

          {/* I have commented the code for notifications and get help if needed in future */}

          {/* <View style={styles.bottomLists}>

        <View style={styles.listcontainer}>
        <Ionicons name="notifications-sharp" size={30} color="#ffffff" />
        <Text style={styles.listText}>Notifications</Text>
        </View>

        </View>

        <View style={styles.bottomLists}>

        <View style={styles.listcontainer}>
        <FontAwesome5 name="question-circle" size={30} color="#fff" />
        <Text style={styles.listText}>get Help</Text>
        </View>

        </View> */}

          <View style={styles.bottomLists}>
            <View style={styles.listcontainer}>
              <Ionicons name="ios-settings-sharp" size={28} color="#fff" />
              <Text style={{ ...styles.listText, fontSize: 14 }}>Settings</Text>
            </View>
          </View>

            
          <View style={styles.bottomContainer}>
          <TouchableWithoutFeedback onPress={onPressLogout}>
            <View style={styles.logOut}>
              <Text style={styles.logoutText}> Log Out</Text>
            </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* This is the Search Donor Screen */}
        <StatusBar
          barStyle="white-content"
          hidden={false}
          backgroundColor="#353A3D"
        />

        <View>
          <ImageOverlay
            source={require("../images/drip2.jpg")}
            overlayColor="#494A4A"
            overlayAlpha={0.7}
            contentPosition="center"
          >
            <View>
              <Image
                style={styles.profileImage}
                source={require("../images/prof.jpg")}
              />
              <Text style={styles.name}>Awais Murtaza</Text>
            </View>
          </ImageOverlay>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("DonorLocationScreen")}
          >
            <View
              style={{
                ...styles.bottomLists,
                backgroundColor: "#EB0000",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}
            >
              <View style={styles.listcontainer}>
                <FontAwesome name="search-minus" size={24} color="#fff" />
                <Text style={styles.listText}>Search Hospital</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.bottomLists}>
            <View style={styles.listcontainer}>
              <Ionicons
                name="ios-person-circle-outline"
                size={38}
                color="#fff"
              />
              <Text style={styles.listText}>Switch to Patient</Text>
              <View style={{ width: wp("60") }}>
                <Switch
                  trackColor={{ false: "#767577", true: "gray" }}
                  thumbColor={isEnabled ? "orange" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>

          {/* <View style={styles.bottomLists}>

   <View style={styles.listcontainer}>
   <Ionicons name="notifications-sharp" size={30} color="#ffffff" />
   <Text style={styles.listText}>Notifications</Text>
   </View>

   </View>

   <View style={styles.bottomLists}>

   <View style={styles.listcontainer}>
   <FontAwesome5 name="question-circle" size={30} color="#fff" />
   <Text style={styles.listText}>get Help</Text>
   </View>

   </View> */}

          <View style={styles.bottomLists}>
            <View style={styles.listcontainer}>
              <Ionicons name="ios-settings-sharp" size={28} color="#fff" />
              <Text style={{ ...styles.listText, fontSize: 14 }}>Settings</Text>
            </View>
          </View>

          {/* Logout Button */}
          <View style={styles.bottomContainer}>
          <TouchableWithoutFeedback onPress={onPressLogout}>
            <View style={styles.logOut}>
              <Text style={styles.logoutText}> Log Out</Text>
            </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

//Styling for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },

  name: {
    color: "#fff",
    textAlign: "center",
    marginTop: hp("2"),
    fontSize: 18,
  },

  bottomLists: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "#333333",
    justifyContent: "center",
  },
  listText: {
    color: "#C7C7C7",
    fontSize: 16,
    position: "absolute",
    left: wp("20"),
  },

  listcontainer: {
    flexDirection: "row",
    width: wp("47"),
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),

    alignItems: "center",
  },

  bottomContainer: {
    backgroundColor: "#333333",
    width: wp("100%"),
    height: hp("100%"),
  },

  logOut: {
    width: wp("80%"),
    height: hp("9%"),
    alignSelf: "center",
    marginTop: hp("10% "),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D3D",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

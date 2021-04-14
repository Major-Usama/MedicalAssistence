import React from "react";
//All the import required for the project
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,

  TouchableWithoutFeedback,
} from "react-native";

//This is being used to make to screen responsive on all devices
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  Entypo,
} from "@expo/vector-icons";

import ImageOverlay from "react-native-image-overlay";
export default function HomeScreen({navigation}) {
     
  const[show,setShow]=React.useState(false);

  //Home Screen 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#C79278"
      />

      <ImageBackground
        style={{ width: wp("100%"), height: hp("65%") }}
        source={require("../images/Ambulance.jpeg")}
      >
        {/* Header */}

        {/* <View style={styles.statusBar}>
          <MaterialIcons name="network-cell" size={14} color="#ffffff" />
          <MaterialCommunityIcons name="battery-50" size={14} color="#ffffff" />
          <Text style={styles.time}>4:20</Text>
        </View> */}
        <View style={styles.header}>
          <View style={styles.leftSideContainer}>
           
            <Text style={styles.aboutUS}>About Us</Text>
          </View>

         
        </View>

        <ImageOverlay
          containerStyle={{
            width: wp("100%"),
            height: hp("57%"),
            alignSelf: "center",
            position: "absolute",
            top: hp("8%"),
          }}
          overlayColor="#505D5E"
          rounded={3}
          contentPosition="top"
          height={hp("50%")}
          overlayAlpha={0.7}
        >
          <View>
            <Entypo
              style={{ position: "absolute", top: 10 }}
              name="cross"
              size={15}
              color="white"
            />

            <View>
              <Text style={styles.textDetail}>
                The purpose of our app is to help the people to immediately
                arrange an{"\n"}
                ambulance and take the patient to a{"\n"}
                hospital as fast as possible. The{"\n"}
                application will provide a platform, where people{"\n"}
                
                
              </Text>

              <View style={{display:show?"flex":"none"}} >

                <Text style={{...styles.textDetail,top:hp('24')}}>
                willing to help others in medical{"\n"}
                emergencies can register. The public users will be{"\n"}
                able to seek help in medical{"\n"}
                emergency conditions.
                </Text>

              </View>

              <View style={styles.readButton}>
                <Text  onPress={()=>setShow(!show)} style={styles.readText}>Read More</Text>
              </View>
            </View>
          </View>
        </ImageOverlay>
      </ImageBackground>

      <View style={styles.bottomButtons}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('SignUpScreen')}>
        <View style={styles.signUp}>
          <Text style={styles.textS}>Sign Up</Text>
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>navigation.navigate('LoginScreen')}>
        <View style={styles.signUp}>
          <Text style={styles.textS}>Login</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}


//Styling for the app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "#DD9B7C",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    position: "absolute",
    
  },
  aboutUS: {
    fontSize: 28,
    color: "#ffffff",
    marginHorizontal: wp("5%"),
  },

  leftSideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusBar: {
    alignSelf: "center",
    width: wp("90%"),
    height: hp("2.8%"),
    backgroundColor: "#C78E73",
    position: "absolute",
    top: hp("4.5%"),
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: wp("4%"),
  },

  time: {
    color: "#ffffff",
  },

  content: {
    alignSelf: "center",
  },

  textDetail: {
    position: "absolute",
    top: hp("10%"),
    width: wp("80%"),
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 15,
  },

  readButton: {
    width: 150,
    height: 55,
    backgroundColor: "#DB4B0C",
    elevation: 10,
    alignSelf: "center",
    position: "absolute",
    top: hp("42%"),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },

  readText: {
    color: "#ffffff",
    fontSize: 24,
    elevation: 20,
  },

  bottomButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    height: hp("60%"),
  },

  signUp: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DB4B0C",
    elevation: 10,
  },
  textS: {
    color: "#ffffff",
  },
});

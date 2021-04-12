import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//we are using this Image overlay inorder to place things over the image
import ImageOverlay from "react-native-image-overlay";
//These are the icons provided by expo itself
import { AntDesign, Entypo, MaterialIcons, Zocial } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {logIn} from "../Database/authMethods"
import Checkbox from "expo-checkbox";



  //For whole app I used functional components
  //In functional components we use hooks to manage states
  //These are the states to change data dynamic like textinputs or checkbox
  //And thing useState I used in call React Hook


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");

  const [pass, setPass] = React.useState("");
  const [isChecked, setChecked] = React.useState(true);
  
  const onPressLogin=async()=>{
    if(email && pass != ''){
    await logIn(email, pass).then(() => {
        navigation.reset({
          index:0,
          routes:[{name:'ProfileScreen'}]
        })
    }).catch((error)=>{
      console.log("error",error)
    })
    }else{
      alert("Please fill all Fields");
    }
  }

  return (
    // This is the code for main front-end of the app which styling is done below
    <SafeAreaView style={styles.container}>
      {/* Main container with background image and login inputs with it */}
      <ImageBackground
        style={{ height: hp("85%"), width: wp("100%") }}
        source={require("../images/Ambulance.jpeg")}
      >
        <ImageOverlay
          height={hp("85%")}
          contentPosition="top"
          overlayColor="#344246"
          overlayAlpha={0.8}
        >
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{
              alignSelf: "flex-start",
              marginLeft: wp("4%"),
              paddingTop: hp("3%"),
            }}
            name="arrowleft"
            size={26}
            color="#ffffff"
          />

          <View>
            <View style={styles.commonContainer}>
              <TextInput
                placeholder="name@website.com"
                style={styles.input}
                onChangeText={(text)=>setEmail(text)}
                value={email}
              />

              <Entypo name="mail" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <TextInput
                placeholder="************"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text)=>setPass(text)}
                value={pass}
              />

              <MaterialIcons name="lock" size={28} color="lightgray" />
            </View>

            <View style={styles.forgotContainer}>
              <View style={styles.checkBoxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "white" : undefined}
                />
                <Text style={styles.remember}>Remember me</Text>
              </View>

              <Text
                style={{ ...styles.remember, textDecorationLine: "underline" }}
              >
                Forgot Password?
              </Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ImageOverlay>
      </ImageBackground>

      {/* Social logins Buttons Facebook and Google */}

      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          <View style={styles.fbContainer}>
            <Zocial name="facebook" size={24} color="#ffffff" />
            <Text style={styles.logintext}>Log in</Text>
          </View>
        </View>

        <View style={{ ...styles.socialButton, backgroundColor: "#E54F34" }}>
          <View style={styles.fbContainer}>
            <Entypo name="google-" size={24} color="#ffffff" />
            <Text style={styles.logintext}>Log in</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


// Styling for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  commonContainer: {
    width: wp("90%"),
    height: hp("8%"),
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",

    marginTop: hp("3%"),
  },

  input: {
    width: wp("80%"),
    height: hp("8%"),
    paddingHorizontal: 10,
  },

  remember: {
    color: "#C9CCCC",
    marginHorizontal: wp("2%"),
  },

  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  forgotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },

  loginButton: {
    width: wp("90%"),
    height: hp("8%"),
    backgroundColor: "#00D2FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
  },

  loginText: {
    color: "#ffffff",
    fontSize: 18,
  },

  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
  },

  socialButton: {
    width: wp("43%"),
    height: 62,
    backgroundColor: "#315B99",
    marginTop: hp("3%"),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  fbContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logintext: {
    color: "#ffffff",
    marginLeft: wp("2%"),
  },
})

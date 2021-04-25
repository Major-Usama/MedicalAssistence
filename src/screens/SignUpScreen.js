import React, { useRef } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View,
} from "react-native";

import SelectPicker from "react-native-form-select-picker";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  Fontisto,
  Foundation,
  FontAwesome,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageOverlay from "react-native-image-overlay";

import { TouchableOpacity } from "react-native-gesture-handler";
import { signUp } from "../Database/authMethods";
import PhoneInput from "react-native-phone-number-input";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const options = ["Male", "Female"];
const options2 = ["Ab+", "A-B-", "A+", "A-", "O+", "O-", "B+", "B-"];

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [pass2, setPass2] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [name, setName] = React.useState("");
  const [bgroup, setBgroup] = React.useState("");
  const phoneInput = useRef(null);

  //This line of code is for validating the  email format
  const validateEmail = () => {
    var re = /^[a-zA-Z0-9]+([-._][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,7}$/;
    return re.test(email);
  };




  //This function will called on signup button click 
  //By clicking the person will create a new account
  const onPressSignUp = async () => {
    if (
      email &&
      pass &&
      pass2 &&
      phone &&
      age &&
      gender &&
      bgroup &&
      name != ""
    ) {
      let validMail;
      validMail = validateEmail();
      if (validMail) {
        if (pass === pass2) {
          if (pass.length > 7) {
            await signUp(email, pass, phone, age, gender, bgroup, name)
              .then(() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "ProfileScreen" }],
                });
              })
              .catch((error) => {
                console.log("error", error);
              });
          } else {
            alert("add minimum 8 chracter's");
          }
        } else {
          alert("Password doesn't match");
        }
      } else {
        alert("Please Enter Valid Email");
      }
    } else {
      alert("Please fill all Fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main container with background image and signup inputs with it */}
      <ImageBackground
        style={{ height: hp("100%"), width: wp("100%") }}
        source={require("../images/Ambulance.jpeg")}
      >
        <ImageOverlay
          height={hp("100%")}
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
            <View></View>
            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Email address"
                style={styles.input}
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
                value={email}
              />

              <Entypo name="mail" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Name"
                style={styles.input}
                keyboardType="numbers-and-punctuation"
                onChangeText={(name) => setName(name)}
                value={name}
              />

              <MaterialIcons
                name="drive-file-rename-outline"
                size={28}
                color="lightgray"
              />
            </View>

            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Age"
                style={styles.input}
                keyboardType="number-pad"
                onChangeText={(age) => setAge(age)}
                value={age}
              />

              <MaterialIcons name="date-range" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <SelectPicker
                onValueChange={(value) => {
                  // Do anything you want with the value.
                  // For example, save in state.
                  setGender(value);
                }}
                doneButtonText="Done"
                selected={gender}
                style={{ width: wp("80%") }}
                placeholder={"Gender"}
                placeholderStyle={{ width: wp("75%"), color: "lightgray" }}
              >
                {Object.values(options).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
                ))}
              </SelectPicker>

              <Foundation name="male-female" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <SelectPicker
                onValueChange={(value) => {
                  // Do anything you want with the value.
                  // For example, save in state.
                  setBgroup(value);
                }}
                doneButtonText="Done"
                selected={bgroup}
                style={{ width: wp("80%") }}
                placeholder={"Blood Group"}
                placeholderStyle={{ width: wp("75%"), color: "lightgray" }}
              >
                {Object.values(options2).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
                ))}
              </SelectPicker>

              <Fontisto name="blood-drop" size={24} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPass(text)}
                value={pass}
              />

              <MaterialIcons name="lock" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Repeat Password"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPass2(text)}
                value={pass2}
              />

              <MaterialIcons name="lock" size={28} color="lightgray" />
            </View>

            <View style={styles.commonContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phone}
                defaultCode="US"
                containerStyle={styles.input}
                textInputStyle={{ height: 70 }}
                onChangeText={(number) => {
                  setPhone(number);
                }}
              />
              <FontAwesome name="phone" size={24} color="lightgray" />
            </View>

            <TouchableOpacity onPress={onPressSignUp}>
              <View style={styles.loginButton}>
                <Text style={styles.loginText}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <View style={{ alignSelf: "center", marginTop: hp("4%") }}>
              <Text style={{ color: "#fff" }}>
                Already have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("LoginScreen")}
                  style={{ color: "#26C975", textDecorationLine: "underline" }}
                >
                  Log in
                </Text>
              </Text>
            </View>
          </View>
        </ImageOverlay>
      </ImageBackground>

      {/* Social logins Buttons Facebook and Google */}
      {/* 
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
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  commonContainer: {
    width: wp("90%"),
    height: hp("6%"),
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",

    marginTop: hp("3%"),
  },

  input: {
    width: wp("80%"),
    height: hp("6%"),
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
    backgroundColor: "#26C975",
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
  inputView: {
    backgroundColor: "#F6F6F6",
    width: WIDTH - 70,
    flexDirection: "row",
    borderRadius: 25,
    padding: 7,
    marginVertical: 10,
    alignSelf: "center",
    marginHorizontal: 50,
  },
});

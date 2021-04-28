import React, { useRef, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View,
  Alert
} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import { AntDesign, Entypo, MaterialIcons,Fontisto, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageOverlay from "react-native-image-overlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import PhoneInput from 'react-native-phone-number-input';
import { updateProfileInfo } from "../Database/authMethods";
import { Foundation } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const options = ["Male", "Female"];
const options2 = ["Ab+", "A-B-", "A+", "A-", "O+", "O-", "B+", "B-"];

export default function EditProfileScreen({ navigation,route }) {
  const { key,emailValue,nameValue,ageValue,genderValue,bloodGroupValue,phoneValue } = route.params
  const [email, setEmail] = useState(emailValue);
  const [phone, setPhone] = useState(phoneValue);
  const [age, setAge] = useState(ageValue);
  const [gender, setGender] = useState(genderValue);
  const [name, setName] = useState(nameValue);
  const [bgroup, setBgroup] = useState(bloodGroupValue);
  const phoneInput = useRef(null);

  const updateUser=async()=>{
    await updateProfileInfo(key,email, name, age, gender, bgroup, phone).then((res) => {
      Alert.alert('Profile has been updated,reload the app to implement changes')
           console.log("res:", res);
          
      }).catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
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
            <View >
            </View>
            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Email address"
                style={styles.input}
                keyboardType='email-address'
                onChangeText={(email) => setEmail(email)}
                value={email}
              />
              <Entypo name="mail" size={28} color="lightgray" />
            </View>
            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Name"
                style={styles.input}
                keyboardType='numbers-and-punctuation'
                onChangeText={(name) => setName(name)}
                value={name}
              />
              <Entypo name="mail" size={28} color="lightgray" />
            </View>
            <View style={styles.commonContainer}>
              <TextInput
                placeholder="Age"
                style={styles.input}
                keyboardType='number-pad'
                onChangeText={(age) => setAge(age)}
                value={age}
              />
              <MaterialIcons name="date-range" size={28} color="lightgray" />
            </View>
            <View style={styles.commonContainer}>
              <SelectPicker
                onValueChange={(value) => setGender(value)}
                doneButtonText="Done"
                selected={gender}
                style={{ width: wp("80%"), }}
                placeholder={"Gender"}
                placeholderStyle={{ width: wp("75%"), color: 'lightgray' }}
              >
                {Object.values(options).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
                ))}
              </SelectPicker>
              <Foundation name="male-female" size={28} color="lightgray" />
            </View>
            <View style={styles.commonContainer}>
              <SelectPicker
                onValueChange={(value) => setBgroup(value)}
                doneButtonText="Done"
                selected={bgroup}
                style={{ width: wp("80%"), }}
                placeholder={"Blood Group"}
                placeholderStyle={{ width: wp("75%"), color: 'lightgray' }}
              >
                {Object.values(options2).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
                ))}
              </SelectPicker>
              <Fontisto name="blood-drop" size={28} color="lightgray" />
            </View>
            <View style={styles.commonContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phone}
                defaultCode="US"
                containerStyle={styles.input}
                textInputStyle={{ height: 70, }}
                onChangeText={(number) => {
                  setPhone(number);
                }}
              />
              <FontAwesome name="phone" size={24} color="lightgray" />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={updateUser}>
              <Text style={styles.loginText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ImageOverlay>
      </ImageBackground>
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
    backgroundColor: '#F6F6F6',
    width: WIDTH - 70,
    flexDirection: 'row',
    borderRadius: 25,
    padding: 7,
    marginVertical: 10,
    alignSelf: 'center',
    marginHorizontal: 50,
  },
});
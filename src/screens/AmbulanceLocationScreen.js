import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";



export default function AmbulanceLocationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#133A74"
      />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSideContainer}>
          <Entypo name="menu" size={28} color="#ffffff" />
          <Text style={styles.aboutUS}>Your Location</Text>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="white" />
      </View>

      <Image
        resizeMode="contain"
        style={{ width: wp("100%"), flex: 1, marginBottom: 50 }}
        source={require("../images/map.png")}
      />

      {/* Footer */}
      <View
        style={{
          ...styles.header,
          position: "absolute",
          bottom: 0,
          paddingHorizontal: wp(0),
        }}
      >
        <View style={styles.leftSideContainer}>
          <Text style={{ ...styles.aboutUS, fontSize: 22 }}>
            Ambulence Ariving
          </Text>
        </View>

        <Text style={{ ...styles.aboutUS, fontSize: 22 }}>10 mins...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "#315B99",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
  },
  aboutUS: {
    fontSize: 24,
    color: "#ffffff",
    marginHorizontal: wp("5%"),
  },

  leftSideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

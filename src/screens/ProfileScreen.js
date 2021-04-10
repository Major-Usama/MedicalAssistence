import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#274879"
      />
      <View style={styles.header}>
        <View style={styles.leftSideContainer}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={26}
            color="#ffffff"
          />

          <Text style={styles.profile}>Profile</Text>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="white" />
      </View>

      <View>
        <Image style={styles.image} source={require("../images/prof.jpg")} />
        <View
          style={{
            width: wp("100%"),
            height: 3,
            backgroundColor: "#878787",
            opacity: 0.3,
            elevation: 10,
          }}
        />
      </View>

      {/* Profile Detail Section like name, age ,gender etc */}

      <View style={styles.titleContainer}>
        <View style={styles.avatar}>
          <Ionicons
            style={{ position: "absolute", top: 5 }}
            name="person"
            size={44}
            color="#ffffff"
          />
        </View>
        <Text style={styles.title}>Awais Murtaza</Text>
      </View>

      <View style={styles.ageContainer}>
        <Text style={styles.age}>age</Text>
        <Text style={styles.age}>21</Text>
      </View>

      <View style={{ ...styles.ageContainer, marginTop: hp("2.5") }}>
        <Text style={styles.gender}>Gender</Text>
        <Text style={styles.gender}>Male</Text>
      </View>

      <View style={{ ...styles.ageContainer, marginTop: hp("2.5") }}>
        <Text style={styles.bGroup}>Blood Group</Text>
        <Text style={styles.bGroup}>A-</Text>
      </View>

      {/* Bottom Detail Section for email and number */}

      <View style={styles.bottomContainer}>
        <View style={styles.numberContainer}>
          <View
            style={{
              ...styles.number,
              elevation: 10,
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
            <FontAwesome name="phone" size={34} color="#ffffff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 19,
                marginHorizontal: wp("4"),
              }}
            >
              0300-1234567
            </Text>
          </View>

          <View
            style={{
              ...styles.edit,
              elevation: 10,
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
            <MaterialIcons name="mode-edit" size={28} color="#989898" />
          </View>
        </View>

        <View style={styles.numberContainer}>
          <View style={styles.number}>
            <Ionicons name="mail-sharp" size={34} color="#ffffff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 19,
                marginHorizontal: wp("4"),
              }}
            >
              abc@gmail.com
            </Text>
          </View>

          <View style={styles.edit}>
            <MaterialIcons name="mode-edit" size={28} color="#989898" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    width: wp("100%"),
    height: hp("9%"),
    backgroundColor: "#315B99",

    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  profile: {
    fontSize: 22,
    color: "#ffffff",
    marginHorizontal: wp("10%"),
  },

  leftSideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: wp("100%"),
    height: hp("40"),
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#315B99",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    fontSize: 32.5,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  titleContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },

  ageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: wp("85"),
    alignSelf: "flex-end",
  },

  age: {
    color: "#000000",
    fontSize: 16,
    opacity: 0.2,
    fontWeight: "bold",
  },

  gender: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bGroup: {
    fontSize: 20,
    fontWeight: "bold",
  },

  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  number: {
    width: wp("80"),
    height: hp("11"),
    backgroundColor: "#4F4F4F",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  edit: {
    backgroundColor: "#585858",

    width: wp("20"),
    height: hp("11"),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer:
  {
      position:'absolute',
      bottom:0,
  }
});

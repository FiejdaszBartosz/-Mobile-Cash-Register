/** @format */

import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/logo";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import personsDate from "../model/persons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AccountPage = ({}) => {
  const id = 2;
  const person = personsDate.find((person) => person.id === id);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <Caption caption={person.name} />
        <View style={style.iconBackground}>
          <FontAwesome name="user" style={style.icon} />
        </View>
        <View style={style.information}>
          <FontAwesome name="user" style={style.iconContainer} />
          <Text style={style.fontsContainer}>{person.name}</Text>
        </View>
        <View style={style.line} />
        <View style={style.information}>
          <FontAwesome name="envelope" style={style.iconContainer} />
          <Text style={style.fontsContainer}>{person.email}</Text>
        </View>
        <View style={style.line} />
        <View style={style.information}>
          <FontAwesome5 name="phone" style={style.iconContainer} />
          <Text style={style.fontsContainer}>{person.phone}</Text>
        </View>
        <View style={style.line} />
        <View style={style.button}>
          <TouchableOpacity style={style.touchableButton}>
            <Text style={style.textButton}>MY BILLS</Text>
          </TouchableOpacity>
        </View>
        <View style={style.button}>
          <TouchableOpacity style={style.touchableButton}>
            <Text style={style.textButton}>EDIT</Text>
          </TouchableOpacity>
        </View>
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
};

export default AccountPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignContent: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconBackground: {
    width: 77,
    height: 77,
    borderRadius: 80,
    backgroundColor: "#F1FAEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    fontSize: 44,
    color: "#457B9D",
  },
  information: {
    width: "83%",
    height: 60,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  fontsContainer: {
    fontSize: 25,
    color: "#1D3557",
  },
  iconContainer: {
    fontSize: 20,
    width: 25,
    color: "#457B9D",
    marginRight: 10,
    alignItems: "center",
  },
  line: {
    width: 411,
    height: 1,
    backgroundColor: "#457B9D",
  },
  touchableButton: {
    width: 196,
    height: 35,
    backgroundColor: "#E63946",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#F1FAEE",
    fontSize: 14,
  },
});

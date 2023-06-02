/** @format */

import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/logo";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import personsDate from "../model/persons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const AccountPage = ({}) => {
  const navigation = useNavigation();
  const handleBillsPage = () => {
    navigation.navigate("BillsPage");
  };
  const handleEditDataPage = () => {
    navigation.navigate("EditDataPage");
  };
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
          <View>
            <TouchableOpacity
              style={style.touchableButton}
              onPress={handleBillsPage}
            >
              <Text style={style.textButton}>MY BILLS</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={style.touchableButton}
              onPress={handleEditDataPage}
            >
              <Text style={style.textButton}>EDIT</Text>
            </TouchableOpacity>
          </View>
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
    width: 60,
    height: 60,
    borderRadius: 80,
    backgroundColor: "#F1FAEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    fontSize: 35,
    color: "#457B9D",
  },
  information: {
    width: "83%",
    height: 40,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  fontsContainer: {
    fontSize: 20,
    color: "#1D3557",
  },
  iconContainer: {
    fontSize: 17,
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
  button: {
    marginTop: 40,
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

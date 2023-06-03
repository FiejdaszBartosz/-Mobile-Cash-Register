/** @format */

import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Logo from "../components/logo";
import GoBack from "../components/go-back";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const EditData = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView style={style.mainContainer} behavior={"height"}>
        <Logo />
        <View style={style.goBackContainer}>
          <GoBack />
        </View>
        <ScrollView contentContainerStyle={style.scrollView}>
          <Caption caption={"Edit data"} />
          <View style={style.editPanel}>
            <View style={style.input}>
              <FontAwesome name="envelope" style={style.icons} />
              <TextInput
                style={[style.textInput, style.dataInput]}
                placeholder="EMAIL"
                placeholderTextColor={"#797676"}
                keyboardType="default"
              />
            </View>
            <View style={style.input}>
              <FontAwesome5 name="lock" style={style.icons} />
              <TextInput
                style={[style.textInput, style.passwordTextInput]}
                placeholder="PASSWORD"
                placeholderTextColor={"#797676"}
                secureTextEntry={!showPassword}
                keyboardType="default"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FontAwesome5 name="eye" />
                ) : (
                  <FontAwesome5 name="eye-slash" />
                )}
              </TouchableOpacity>
            </View>
            <View style={style.input}>
              <FontAwesome5 name="lock" style={style.icons} />
              <TextInput
                style={[style.textInput, style.passwordTextInput]}
                placeholder="PASSWORD"
                placeholderTextColor={"#797676"}
                secureTextEntry={!showPassword1}
                keyboardType="default"
              />
              <TouchableOpacity
                onPress={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? (
                  <FontAwesome5 name="eye" />
                ) : (
                  <FontAwesome5 name="eye-slash" />
                )}
              </TouchableOpacity>
            </View>
            <View style={style.input}>
              <FontAwesome name="user" style={style.icons} />
              <TextInput
                style={[style.textInput, style.dataInput]}
                placeholder="NAME"
                placeholderTextColor={"#797676"}
                keyboardType="default"
              />
            </View>
            <View style={style.input}>
              <FontAwesome5 name="mobile" style={style.icons} />
              <TextInput
                style={[style.textInput, style.dataInput]}
                placeholder="PHONE NUMBER"
                placeholderTextColor={"#797676"}
                keyboardType="numeric"
              />
            </View>
            <View style={style.editButton}>
              <TouchableOpacity onPress={() => {}} style={style.editButtonText}>
                <Text style={[style.editButtonextColor]}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <OptionsBar />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditData;

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
  goBackContainer: {
    alignSelf: "flex-start",
    marginTop: 16,
    marginLeft: 16,
  },

  editPanel: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    height: 370,
    backgroundColor: "#457B9D",
    borderRadius: 28,
  },
  input: {
    backgroundColor: "#F1FAEE",
    width: "80%",
    height: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
  },
  textInput: {
    padding: 0,
  },
  icons: {
    marginLeft: 10,
    marginRight: 10,
    color: "#797676",
  },
  passwordTextInput: {
    width: "78%",
  },
  dataInput: {
    width: "100%",
  },
  editButton: {
    width: "75%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E63946",
    borderRadius: 12,
    marginTop: -10,
  },
  editButtonText: {
    width: "100%",
    alignItems: "center",
  },
  editButtonextColor: {
    color: "#F1FAEE",
  },
  scrollView: {
    width: 400,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

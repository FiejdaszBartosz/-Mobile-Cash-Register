/** @format */

import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  StatusBar,
} from "react-native";
import LoginPage from "./login-page";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import Logo from "../components/logo";
import Caption from "../components/caption";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("LoginPage");
  };
  //StatusBar.setBackgroundColor("#457B9D");

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={style.keyboardAvoidingView}
        >
          <Logo />
          {/* <View style={style.caption}>
            <Text style={[style.inscription]}> CREATE ACCOUNT</Text>
          </View> */}
          <Caption caption="CREATE ACCOUNT" />
          <View style={style.signUpPanel}>
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
                  <FontAwesome5 name="eye" style={style.icons} />
                ) : (
                  <FontAwesome5 name="eye-slash" style={style.icons} />
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
            <View style={style.signUpButton}>
              <TouchableOpacity
                onPress={() => {}}
                style={style.signUpButtonText}
              >
                <Text style={[style.signUpButtonTextColor]}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[style.signIn]}>
            <Text style={style.alrHaveAcc}>Already have a account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={style.textSignIn}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  keyboardAvoidingView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 30,
  },

  inscription: {
    fontWeight: 700,
    fontSize: 40,
    color: "#1D3557",
    lineHeight: 54,
  },

  signUpPanel: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    height: 400,
    backgroundColor: "#457B9D",
    borderRadius: 28,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#F1FAEE",
    width: "80%",
    height: 34,
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
  signUpButton: {
    width: "75%",
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E63946",
    borderRadius: 12,
  },
  signUpButtonText: {
    width: "100%",
    alignItems: "center",
  },
  signUpButtonTextColor: {
    color: "#F1FAEE",
  },

  scrollContainer: {
    width: "100",
  },

  signIn: {
    flexDirection: "row",
    fontWeight: 400,
    fontSize: 15,
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  textSignIn: {
    flexDirection: "row",
    color: "#E63946",
  },
  alrHaveAcc: {
    color: "#1D3557",
  },
});

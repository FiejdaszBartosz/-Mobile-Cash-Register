/** @format */

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const GoBackButton = ({}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.touchableContainer} onPress={handleGoBack}>
        <FontAwesome5 name="arrow-left" style={style.icon} />
        <Text style={style.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;

const style = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 80,
  },
  icon: {
    fontSize: 20,
    color: "#1D3557",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#1D3557",
    marginLeft: 4,
  },
});

/** @format */

import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logo = () => {
  const navigation = useNavigation();
  const handleHomePage = () => {
    navigation.navigate("HomePage");
  };

  return (
    <TouchableOpacity style={style.touchableImage} onPress={handleHomePage}>
      <Image
        style={style.logo}
        source={require("../assets/img/logos/regiself-logo.png")}
      />
    </TouchableOpacity>
  );
};

export default Logo;

const style = StyleSheet.create({
  logo: {
    width: "100%",
    height: 77,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  touchableImage: {
    width: "100%",
    height: 77,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

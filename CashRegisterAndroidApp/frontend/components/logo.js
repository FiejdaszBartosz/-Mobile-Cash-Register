/** @format */

import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      style={style.logo}
      source={require("../assets/img/regiself-logo.png")}
    />
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
});

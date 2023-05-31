/** @format */

import React from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";

const WelcomePage = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image
          style={style.logo}
          source={require("../assets/img/logos/regiself-logo-welcome.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 393,
    height: 101,
  },
});

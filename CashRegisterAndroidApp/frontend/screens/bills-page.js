/** @format */

import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Logo from "../components/logo";
import GoBack from "../components/go-back";
import Bills from "../components/bills";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";

const BillsPage = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <View style={style.goBackContainer}>
          <GoBack />
        </View>
        <Caption caption={"My bills"} />
        <Bills />
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
};

export default BillsPage;

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
});

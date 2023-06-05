/** @format */

import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Logo from "../components/logo";
import Caption from "../components/caption";
import ShoppingCart from "../components/shopping-cart";
import OptionsBar from "../components/options-bar";

const ShoppingCartPage = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <Caption caption="Shopping Cart" />
        <View style={style.shoppingCartProducts}>
          <ShoppingCart />
        </View>
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCartPage;

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
  shoppingCartContainer: {
    flex: 1,
    width: 366,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  shoppingCartProducts: {
    margin: 10,
    height: 363,
  },
});

/** @format */

import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/logo";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import products from "../model/products";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  const navigation = useNavigation();
  const handleQRCode = () => {
    navigation.navigate("DisplayQRCode");
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <Caption caption="Today's promotions" />
        <View style={style.product}>
          <Image source={randomProduct.image} style={style.productImage} />
          <View style={style.productInfo}>
            <Text style={style.productName}>{randomProduct.name}</Text>
            <Text style={style.productPrice}>$ {randomProduct.price}</Text>
          </View>
        </View>
        <View style={style.startShoppingButton}>
          <TouchableOpacity
            style={style.touchableButton}
            onPress={handleQRCode}
          >
            <Text style={style.textShoppingStart}>START</Text>
            <Text style={style.textShoppingStart}>SHOPPING</Text>
          </TouchableOpacity>
        </View>
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
};

export default App;

style = StyleSheet.create({
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
  product: {
    width: "60%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  productImage: {
    width: 164,
    height: 109,
  },
  touchableButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textShoppingStart: {
    color: "#F1FAEE",
    fontSize: 20,
    fontWeight: "400",
  },
  startShoppingButton: {
    width: 200,
    height: 70,
    backgroundColor: "#E63946",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
  },
  productInfo: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
  productName: {
    fontSize: 14,
    color: "#000000",
  },
  productPrice: {
    fontSize: 20,
    color: "#E63946",
  },
});

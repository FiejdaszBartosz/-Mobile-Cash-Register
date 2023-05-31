/** @format */

import React from "react";
import {
  Text,
  StatusBar,
  View,
  Style,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const OptionsBar = () => {
  return (
    <View style={style.container}>
      <View style={style.mainContainer}>
        <TouchableOpacity style={style.touchableIcons}>
          <FontAwesome name="shopping-cart" style={style.icons} />
        </TouchableOpacity>
        <TouchableOpacity style={style.touchableCamera}>
          <FontAwesome name="camera" style={style.iconsCamera} />
        </TouchableOpacity>
        <TouchableOpacity style={style.touchableIcons}>
          <FontAwesome name="user" style={style.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionsBar;

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#457B9D",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    fontSize: 32,
  },
  iconsCamera: {
    fontSize: 35,
  },
  touchableCamera: {
    width: 100,
    height: 100,
    backgroundColor: "#E63946",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

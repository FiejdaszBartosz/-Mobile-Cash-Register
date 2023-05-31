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
      <TouchableOpacity>
        <FontAwesome name="shopping-cart" style={style.icons} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 116,
          height: 116,
          backgroundColor: "#E63946",
          borderRadius: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="camera" style={style.iconsCamera} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="user" style={style.icons} />
      </TouchableOpacity>
    </View>
  );
};

export default OptionsBar;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 73,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#457B9D",
  },
  icons: {
    fontSize: 32,
  },
  iconsCamera: {
    fontSize: 35,
  },
});

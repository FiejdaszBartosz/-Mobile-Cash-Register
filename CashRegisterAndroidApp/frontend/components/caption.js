/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Caption = ({ caption }) => {
  return (
    <View style={style.caption}>
      <Text style={[style.inscription]}> {caption}</Text>
    </View>
  );
};

export default Caption;

const style = StyleSheet.create({
  caption: {
    marginTop: 30,
  },
  inscription: {
    fontWeight: 700,
    fontSize: 40,
    color: "#1D3557",
    lineHeight: 54,
  },
});

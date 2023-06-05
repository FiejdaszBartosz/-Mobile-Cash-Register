/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import Logo from "../components/logo";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import GoBack from "../components/go-back";
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from "@react-native-async-storage/async-storage";


const DisplayQRCode = ({route}) => {

  const [receiptId, setReceiptId] = useState('');

  const { qrCode } = route.params;
  console.log("params: " + qrCode);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <View style={style.goBackContainer}>
          <GoBack />
        </View>
        <Caption caption="Your QR Code" />
        <View style={style.qrCodeContainer}>
          <QRCode
            value={qrCode}
            size={300}
            style={style.qrCode}
          />
        </View>
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
  
};

export default DisplayQRCode;

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
  qrCodeContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  qrCode: {
    size: 600,
  },
});

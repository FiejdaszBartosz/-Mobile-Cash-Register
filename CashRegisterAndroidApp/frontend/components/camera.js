/** @format */

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Entypo } from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GoBack from "./go-back";
import Logo from "./logo";

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const navigator = useNavigation();

  const handleShoppingCart = () => {
    navigator.navigate("ShoppingCartPage");
  };

  const handleBackButtonPress = () => {
    navigator.goBack();
  };
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(data);
  };

  if (hasPermission === null) {
    return (
      <View style={style.container}>
        <Text style={style.text}>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={style.container}>
        <Logo />
        <View style={style.goBackContainer}>
          <GoBack />
        </View>
        <View style={style.textContainer}>
          <Text style={style.text}>No access to camera </Text>
          <Entypo name="emoji-sad" style={style.emoji} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {!scanned && (
          <View style={style.attachmentsContainer}>
            <View style={style.returnContainer}>
              <TouchableOpacity
                onPress={handleBackButtonPress}
                style={style.backButton}
              >
                <Ionicons name="arrow-back" style={style.arrowBack} />
              </TouchableOpacity>
            </View>
            <View style={style.scanOverlay}>
              <Text style={style.scanText}>Scan bar code</Text>
            </View>
          </View>
        )}
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignContent: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#A8DADC",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#A8DADC",
    alignItems: "center",
  },
  goBackContainer: {
    alignSelf: "flex-start",
    marginTop: 16,
    marginLeft: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#1D3557",
  },
  emoji: {
    textAlign: "center",
    fontSize: 30,
    color: "#1D3557",
  },
  scanOverlay: {
    position: "absolute",
    top: "4%",
    left: "30%",
    width: "40%",
    height: "8%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  scanText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
  backButton: {
    padding: 8,
  },
  attachmentsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  returnContainer: {
    position: "absolute",
    top: "4%",
    left: "5%",
    width: "13%",
    height: "8%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
  arrowBack: {
    fontSize: 24,
    color: "white",
  },
});

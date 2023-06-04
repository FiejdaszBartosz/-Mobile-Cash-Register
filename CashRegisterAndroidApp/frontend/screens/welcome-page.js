/** @format */

import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Animated,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = () => {
  const [animation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const handleGoLogin = () => {
    navigation.navigate("LoginPage");
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1300, // Czas trwania animacji (w milisekundach)
      useNativeDriver: true,
    }).start();
  };

  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const logoStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 0],
        }),
      },
    ],
  };

  const buttonStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 2],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.View style={[styles.logoContainer, logoStyle]}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logos/regiself-logo-welcome.png")}
          />
        </Animated.View>
        <Animated.View style={[styles.buttonContainer, buttonStyle]}>
          <Button
            title="START SHOPPING"
            onPress={handleGoLogin}
            color="#E63946"
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 393,
    height: 101,
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
    alignSelf: "center",
  },
});

export default WelcomePage;

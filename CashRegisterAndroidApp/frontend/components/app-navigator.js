/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpPage from "../screens/sign-up-page";
import LoginPage from "../screens/login-page";
import Home from "../screens/home-page";
import ShoppingCartPage from "../screens/shopping-cart-page";
import AccountPage from "../screens/account-page";
import GoBackButton from "./go-back";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GoBackButton"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShoppingCartPage" component={ShoppingCartPage} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        <Stack.Screen name="GoBackButton" component={GoBackButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

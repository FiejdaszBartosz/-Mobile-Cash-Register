/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpPage from "../screens/sign-up-page";
import LoginPage from "../screens/login-page";
import Home from "../screens/home-page";
import ShoppingCartPage from "../screens/shopping-cart-page";
import AccountPage from "../screens/account-page";
import ShoppingCart from "../components/shopping-cart";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AccountPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShoppingCartPage" component={ShoppingCartPage} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpPage from "../screens/sign-up-page";
import LoginPage from "../screens/login-page";
import HomePage from "../screens/home-page";
import ShoppingCartPage from "../screens/shopping-cart-page";
import AccountPage from "../screens/account-page";
import BillsPage from "../screens/bills-page";
import OrderDetailPage from "../screens/order-details";
import EditDataPage from "../screens/edit-data";
import Camera from "./camera";
import DisplayQRCode from "../screens/display-qrcode";

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
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ShoppingCartPage" component={ShoppingCartPage} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        <Stack.Screen name="BillsPage" component={BillsPage} />
        <Stack.Screen name="OrderDetailPage" component={OrderDetailPage} />
        <Stack.Screen name="EditDataPage" component={EditDataPage} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="DisplayQRCode" component={DisplayQRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

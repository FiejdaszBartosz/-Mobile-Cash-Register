import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingCart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getCartData();
  }, []);

  async function getCartData() {
    await AsyncStorage.getItem("receiptId")
      .then((value) => {
        return fetch('https://mobile-cash-register-production.up.railway.app/receipt/' + value, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json()) // Parse response as JSON
          .then((data) => {
            console.log(data);
            setCartData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }  

  return (
    <ScrollView style={style.scrollViewContent}>
      <View style={style.mainContainer}>
        {cartData.map((product, index) => {
          return (
            <View key={product.id}>
              <View style={style.productContainer}>
                {/* <Image
                  source={productData.image}
                  style={style.imageContainer}
                /> */}
                <View style={style.productInformationContainer}>
                  <Text style={style.productName}>{product.name}</Text>
                  <Text style={style.productQuantity}>
                    Quantity: {product.productCount}
                  </Text>
                  <Text style={style.productPrice}>$ {product.price * product.productCount}</Text>
                </View>
                <TouchableOpacity style={style.trashButton}>
                  <FontAwesome5 name={"trash"} style={style.trash} />
                </TouchableOpacity>
              </View>
              {index !== cartData.length - 1 && (
                <View style={style.line}></View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShoppingCart;

const style = StyleSheet.create({
  noCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noCartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  scrollViewContent: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F1FAEE",
    borderRadius: 20,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 341,
    height: 80,
    marginBottom: 10,
  },
  imageContainer: {
    width: 65,
    height: 65,
    marginLeft: 10,
  },
  productInformationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  trashButton: {
    padding: 10,
    marginRight: 10,
  },
  trash: {
    color: "#457B9D",
    fontSize: 13,
  },
  line: {
    width: 341,
    height: 1,
    backgroundColor: "#A8DADC",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 13,
    color: "#E63946",
    marginBottom: 5,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginRight: 15,
  },
  productQuantity: {
    fontSize: 12,
  },
});

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import COLORS from "../../consts/colors";
import { Product } from "../../types/index";
import ProductList from "./ProductList";

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const [cartItems, setCartItems] = useState<Product[]>(route.params?.cartItems || []);

  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);

  const addToCart = (product: Product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantidade++;
    } else {
      updatedCartItems.push({ ...product, quantidade: 1 });
    }
    setCartItems(updatedCartItems);
    navigation.navigate("CartScreen", {
      cartItems: updatedCartItems,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductList 
        addToCart={addToCart} 
        cartItems={cartItems}
        setCartItems={setCartItems}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  header: {
    paddingTop: 10,
    height: 50,
    marginTop: 10,
    flexDirection: "column",
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;

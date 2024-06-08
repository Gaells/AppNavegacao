import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View} from "react-native";
import COLORS from "../../consts/colors";
import ListCategories from "../components/ListCategories";
import { Food } from "../../types/index";
import ProductList from "./ProductList";

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [cartItems, setCartItems] = useState<Food[]>(route.params?.cartItems || []);

  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);

  const updateCartItems = (updatedItems: Food[]) => {
    setCartItems(updatedItems);
  };

  const addToCart = (food: Food) => {
    const updatedCartItems = [...cartItems];
    const existingItem = updatedCartItems.find((item) => item.id === food.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      updatedCartItems.push({ ...food, quantity: 1 });
    }
    setCartItems(updatedCartItems);
    navigation.navigate("CartScreen", {
      cartItems: updatedCartItems,
      updateCartItems,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View>
        <ListCategories // Aqui temos as categorias que ficam abaixo da barra de pesquisa
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
        />
      </View>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;

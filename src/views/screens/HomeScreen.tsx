import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View} from "react-native";
import COLORS from "../../consts/colors";
import foods from "../../consts/foods";
import ProductList from "../components/ProductList";
import ListCategories from "../components/ListCategories";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Food } from "../../types/index";

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [cartItems, setCartItems] = useState<Food[]>(route.params?.cartItems || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);

  const updateCartItems = (updatedItems: Food[]) => {
    setCartItems(updatedItems);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = foods.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(foods);
    }
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
      <View style={styles.header}>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      </View>
      <View>
        <ListCategories // Aqui temos as categorias que ficam abaixo da barra de pesquisa
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredFoods}
        renderItem={({ item }) => (
          <Card food={item} addToCart={addToCart} navigation={navigation} />
        )}
      />
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

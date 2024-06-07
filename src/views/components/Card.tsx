import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { Food } from "../../types/index";

interface CardProps {
  food: Food;
  addToCart: (food: Food) => void;
  navigation: any;
}

const Card: React.FC<CardProps> = ({ food, addToCart, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsScreen", food)}
      style={{ flex: 1 }}
    >
      <View style={styles.card}>
        <View style={{ alignItems: "center", top: -40 }}>
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>${food.price}</Text>
          <TouchableOpacity
            onPress={() => addToCart(food)}
            style={styles.addToCartBtn}
          >
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: Dimensions.get("screen").width / 2 - 20,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;

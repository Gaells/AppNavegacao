import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { Product } from "../../types/index";

interface CardProps {
  product: Product;
  addToCart: (product: Product) => void;
  navigation: any;
}

const Card: React.FC<CardProps> = ({ product, addToCart, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => addToCart(product)}
      style={{ flex: 1 }}
    >
      <View style={styles.card}>
        <View style={{ alignItems: "center", top: -40 }}>
          <Image source={require("../../assets/3.png")} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{product.nome}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>${product.preco}</Text>
          <TouchableOpacity
            onPress={() => addToCart(product)}
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

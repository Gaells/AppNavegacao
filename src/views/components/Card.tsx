import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { Product } from "../../types/index";
import { productImages } from "../../consts/Imagens";
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
      style={styles.touchable}
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={productImages[product.id]} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{product.nome}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${product.preco}</Text>
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
  touchable: {
    flex: 1,
  },
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
  imageContainer: {
    alignItems: "center",
    top: -40,
  },
  image: {
    height: 120,
    width: 120,
  },
  textContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Kanit_400Regular',
  },
  priceContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Kanit_400Regular',
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

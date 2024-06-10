import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { Product } from "../../types/index";
import { productImages } from "../../consts/Imagens";

interface CartCardProps {
  item: Product;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
}

interface CartScreenProps {
  navigation: any;
  route: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation, route }) => {
  const { cartItems, updateCartItems } = route.params || {};
  const [items, setItems] = useState<Product[]>(cartItems || []);

  useEffect(() => {
    setItems(cartItems || []);
  }, [cartItems]);

  useEffect(() => {
    if (items.length > 0) {
      updateCartItems(items);
    }
  }, [items]);

  const removeFromCart = (itemId: string) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    updateCartItems(updatedItems);
  };

  const increaseQuantity = (itemId: string) => {
    setItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantidade + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (itemId: string) => {
    setItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === itemId && cartItem.quantidade > 1 ? { ...cartItem, quantity: cartItem.quantidade - 1 } : cartItem
      )
    );
  };

  const calculateTotalPrice = () => {
    return items
      .reduce(
        (total, item) => total + (item.preco || 0) * (item.quantidade || 0),
        0
      )
      .toFixed(2);
  };

  const CartCard: React.FC<CartCardProps> = ({
    item,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={productImages[item.id]} style={{ height: 80, width: 80 }} />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.nome}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.descricao}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ${item.preco}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id)}
            style={styles.actionBtn}
          >
            <Icon name="remove" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{item.quantidade}</Text>
          <TouchableOpacity
            onPress={() => increaseQuantity(item.id)}
            style={styles.actionBtn}
          >
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeFromCart(item.id)}
            style={styles.actionBtn}
          >
            <Icon name="delete" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (items.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Seu carrinho está vazio!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={{ fontSize: 16, color: COLORS.primary, marginTop: 20 }}>
            Voltar para a tela principal
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Carrinho</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={items}
        renderItem={({ item }) => (
          <CartCard
            item={item}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Text style={styles.totalPrice}>${calculateTotalPrice()}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.light,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;

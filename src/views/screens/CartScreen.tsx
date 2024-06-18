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
  const { cartItems } = route.params || {};
  const [items, setItems] = useState<Product[]>(cartItems || []);

  useEffect(() => {
    setItems(cartItems || []);
  }, [cartItems]);

  const removeFromCart = (itemId: string) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    navigation.setParams({ cartItems: updatedItems });
  };

  const increaseQuantity = (itemId: string) => {
    const updatedItems = items.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : cartItem
    );
    setItems(updatedItems);
    navigation.setParams({ cartItems: updatedItems });
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedItems = items.map(cartItem =>
      cartItem.id === itemId && cartItem.quantidade > 1 ? { ...cartItem, quantidade: cartItem.quantidade - 1 } : cartItem
    );
    setItems(updatedItems);
    navigation.setParams({ cartItems: updatedItems });
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
        <Image source={productImages[item.id]} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.nome}</Text>
          <Text style={styles.description}>{item.descricao}</Text>
          <Text style={styles.price}>${item.preco}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.actionBtn}>
            <Icon name="remove" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantidade}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.actionBtn}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.actionBtn}>
            <Icon name="delete" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Seu carrinho está vazio!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.backToHome}>Voltar para a tela principal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={styles.headerTitle}>Carrinho</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
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
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.totalText}>${calculateTotalPrice()}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cartCard: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    alignItems: "center"
  },
  image: {
    height: 70,
    width: 70,
  },
  details: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 13,
    color: COLORS.grey,
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
  },
  actions: {
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
  quantity: {
    marginHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
  },
  backToHome: {
    fontSize: 16,
    color: COLORS.primary,
    marginTop: 20,
  },
  flatList: {
    paddingBottom: 80,
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
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
   

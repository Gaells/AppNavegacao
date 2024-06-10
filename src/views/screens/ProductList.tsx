import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';
import COLORS from '../../consts/colors';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { Product } from '../../types/index';

interface ProductListProps {
  addToCart: (product: Product) => void;
  cartItems: Product[];
  setCartItems: (items: Product[]) => void;
  updateCartItems: (items: Product[]) => void;
  navigation: any; // Adicionando navigation aqui
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, cartItems, setCartItems, updateCartItems, navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter((product) =>
        product.nome.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://192.168.100.17:8080/api/items'); // Substitua pelo seu endereço IPv4
        const productsWithQuantity = response.data.map((product: Product) => ({ ...product, quantidade: 0 }));
        setProducts(productsWithQuantity);
        setFilteredProducts(productsWithQuantity); // Inicialmente, mostrar todos os produtos
      } catch (error) {
        console.error('Erro ao buscar os itens do menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              product={item}
              addToCart={addToCart}
              navigation={navigation} // Passando navigation para o Card
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
  }
});

export default ProductList;

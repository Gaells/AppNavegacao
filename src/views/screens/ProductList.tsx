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
  navigation: any;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, cartItems, setCartItems,  navigation }) => {
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
        setFilteredProducts(productsWithQuantity);
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Card
                product={item}
                addToCart={addToCart}
                navigation={navigation}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
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
    justifyContent: 'center',
    alignItems: 'center',
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

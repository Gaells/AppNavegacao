import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';
import COLORS from '../../consts/colors';
import SearchBar from '../components/SearchBar';

type Product = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
};

const ProductList: React.FC = () => {
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
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente, mostrar todos os produtos
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
            <View style={styles.itemContainer}>
              <Text>{item.nome} - R${item.preco}</Text>
              <Text>{item.descricao}</Text>
            </View>
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
    marginTop: 40,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;

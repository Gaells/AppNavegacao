import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

interface SearchBarProps {
  searchQuery: string;
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, handleSearch }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search" size={28} />
      <TextInput
        style={{ flex: 1, fontSize: 18 }}
        placeholder="Procure seus pratos"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <View style={styles.sortBtn}>
        <Icon name="tune" size={22} color={COLORS.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;

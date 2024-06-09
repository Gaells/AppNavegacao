import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

interface SearchBarProps {
  searchQuery: string;
  handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, handleSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.focused]}>
      <TextInput
        style={{ flex: 1, fontSize: 18 }}
        placeholder="Procure seus lanches"
        value={searchQuery}
        onChangeText={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Icon name="search" size={28} />
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
  focused: {
    borderWidth: 2,
    borderColor: COLORS.dark,
  },
});

export default SearchBar;

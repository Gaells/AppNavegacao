import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../consts/colors";
import categories from "../../consts/categories";

interface ListCategoriesProps {
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: (index: number) => void;
}

const ListCategories: React.FC<ListCategoriesProps> = ({
  selectedCategoryIndex,
  setSelectedCategoryIndex,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex === index ? COLORS.primary : COLORS.secondary,
              ...styles.categoryBtn,
            }}
          >
            <View style={styles.categoryBtnImgCon}>
              <Image
                source={category.image}
                style={{ height: 35, width: 35, resizeMode: "cover" }}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 10,
                color:
                  selectedCategoryIndex === index ? COLORS.white : COLORS.primary,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListCategories;

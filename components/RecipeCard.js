import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const RecipeCard = ({ cotainerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={recipeItem.image} resizeMode="cover" style={styles.img} />
      <View style={styles.cardRight}>
        <Text style={styles.cardText}>{recipeItem.title}</Text>
        <Text style={styles.paragraph}>{recipeItem.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 13,
    backgroundColor: "#FFFF",
  },
  cardText: {
    flex: 1,
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  paragraph: {
    flex: 1,
    marginVertical: 5,
    lineHeight: 20,
  },
  cardRight: {
    width: "70%",
    paddingHorizontal: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
});

export default RecipeCard;

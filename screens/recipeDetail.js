import react, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";

const HEADER_HEIGHT = 300;

export default function RecipeDetails({ route, navigation }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  function renderRecipeCardHeader() {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
          }}
        />
      </View>
    );
  }

  function renderRecipeTitle() {
    return (
      <View>
        <Text style={styles.recipeTitle}>{selectedRecipe?.title}</Text>
        <Text style={styles.recipeSubTitle}>Ingredients List</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}

            {/* Recipe Tittle Title */}
            {renderRecipeTitle()}
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.containerMain}>
            <View style={styles.container}>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        scrollEnabled={false}
      />
      <FlatList
        data={selectedRecipe?.steps}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={<Text style={styles.recipeSubTitle}>Steps</Text>}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.quantity}>{item.id}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 1,
  },
  containerMain: {
    flexDirection: "column",
  },
  quantity: {
    fontFamily: "Roboto-Light",
    flexDirection: "row",
    paddingHorizontal: 3,
    marginVertical: 1,
  },
  description: {
    fontFamily: "Roboto-Light",
    flexDirection: "row",
    paddingHorizontal: 3,
    marginVertical: 2,
  },
  headerContainer: {
    alignItems: "center",
  },
  recipeTitle: {
    fontFamily: "Roboto-Black",
    fontSize: 20,
    alignContent: "flex-start",
    padding: 7,
    marginLeft: 20,
  },
  recipeSubTitle: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
    alignContent: "flex-start",
    marginLeft: 27,
    marginBottom: 10,
  },
  recipeText: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
    alignContent: "flex-start",
    marginLeft: 27,
  },
});
